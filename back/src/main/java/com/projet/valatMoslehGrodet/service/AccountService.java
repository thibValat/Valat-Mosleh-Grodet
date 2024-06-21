package com.projet.valatMoslehGrodet.service;

import com.projet.valatMoslehGrodet.dto.*;
import com.projet.valatMoslehGrodet.entity.Account;
import com.projet.valatMoslehGrodet.mapper.AccountMapper;
import com.projet.valatMoslehGrodet.repository.AccountRepository;
import lombok.AllArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;



import java.util.List;


@Service
@AllArgsConstructor
public class AccountService {
    private final AccountRepository accountRepository;
    private final AccountMapper accountMapper;
    private final BCryptPasswordEncoder passwordEncoder;

    @Cacheable(value = "accounts")
    public List<AccountDTO> getAll(){
        return accountMapper.toDtos(accountRepository.findAll());
    }
    @Cacheable(value = "accounts", key = "#accountId")
    public AccountDTO getById(Long id){
        return accountMapper.toDTO(accountRepository.findById(id).orElse(null));
    }
    @CacheEvict(value ="accountDetails", allEntries = true)
    public AccountDTO update(Long id, AccountDTO accountDTO) {
        return accountRepository.findById(id)
                .map(existingAccount -> {
                    Account account = accountMapper.toEntity(accountDTO);
                    account.setId(id);
                    return accountMapper.toDTO(accountRepository.save(account));
                })
                .orElse(null);
    }

    public AccountDTO createAccount(AccountCreationDTO accountCreationDTO){
        accountCreationDTO.setPassword(passwordEncoder.encode(accountCreationDTO.getPassword()));
        Account accountToSave = new Account();
        accountToSave = accountMapper.toEntity(accountCreationDTO);
        accountRepository.save(accountToSave);

        return accountMapper.toDTO(accountToSave);

    }
    public AccountDTO logInAccount(AccountSignInDTO accountSignInDTO){
            Account account = accountRepository.findByEmail(accountSignInDTO.getEmail());
            if (account != null) {
                if (passwordEncoder.matches(accountSignInDTO.getPassword(), account.getPassword())) {
                    return accountMapper.toDTO(account);
                } else {
                    return null;
                }
            } else {
                return null;
            }
    }
    @CacheEvict(value = "accountDetails", allEntries = true)
    public void delete(Long id) {
        accountRepository.deleteById(id);
    }

    @Cacheable(value = "accountsByFullName", key = "{#acc.firstname, #acc.lastName}")
    public List<AccountDTO> getAccountByFullName(String firstName, String lastName){
        return accountMapper.toDtos(accountRepository.findByFirstNameAndLastName(firstName,lastName));
    }


}
