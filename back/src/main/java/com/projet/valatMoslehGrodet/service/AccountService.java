package com.projet.valatMoslehGrodet.service;

import com.projet.valatMoslehGrodet.dto.AccountDTO;
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
    public AccountDTO createAccount(AccountDTO account){
        return  accountMapper.toDTO(accountRepository.save(accountMapper.toEntity(account)));
    }

}
