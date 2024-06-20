package com.projet.valatMoslehGrodet.service;

import com.projet.valatMoslehGrodet.dto.*;
import com.projet.valatMoslehGrodet.entity.Account;
import com.projet.valatMoslehGrodet.mapper.AccountMapper;
import com.projet.valatMoslehGrodet.repository.AccountRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AccountService {
    private final AccountRepository accountRepository;
    private final AccountMapper accountMapper;

    public List<AccountDTO> getAll(){
        return accountMapper.toDtos(accountRepository.findAll());
    }
    public AccountDTO getById(Long id){
        return accountMapper.toDTO(accountRepository.findById(id).orElse(null));
    }
    public AccountDTO createAccount(AccountCreationDTO accountCreationDTO){
        Account accountToSave = new Account();
        accountToSave = accountMapper.toEntity(accountCreationDTO);
        accountRepository.save(accountToSave);

        return accountMapper.toDTO(accountToSave);

    }

}
