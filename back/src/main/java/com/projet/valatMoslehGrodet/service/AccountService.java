package com.projet.valatMoslehGrodet.service;

import com.projet.valatMoslehGrodet.dto.*;
import com.projet.valatMoslehGrodet.entity.Account;
import com.projet.valatMoslehGrodet.mapper.AccountMapper;
import com.projet.valatMoslehGrodet.repository.AccountRepository;
import lombok.AllArgsConstructor;
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

    public List<AccountDTO> getAll(){
        return accountMapper.toDtos(accountRepository.findAll());
    }
    public AccountDTO getById(Long id){
        return accountMapper.toDTO(accountRepository.findById(id).orElse(null));
    }
    public AccountDTO createAccount(AccountCreationDTO accountCreationDTO){
        accountCreationDTO.setPassword(passwordEncoder.encode(accountCreationDTO.getPassword()));
        Account accountToSave = new Account();
        accountToSave = accountMapper.toEntity(accountCreationDTO);
        accountRepository.save(accountToSave);

        return accountMapper.toDTO(accountToSave);

    }
    public ResponseEntity<Object> logInAccount(AccountSignInDTO accountSignInDTO){
            Account account = accountRepository.findByEmail(accountSignInDTO.getEmail());
            if (account != null) {
                if (passwordEncoder.matches(accountSignInDTO.getPassword(), account.getPassword())) {
                    return ResponseEntity.ok().body("Login successful");
                } else {
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
                }
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
    }

}
