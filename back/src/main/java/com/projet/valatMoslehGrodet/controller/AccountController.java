package com.projet.valatMoslehGrodet.controller;

import com.projet.valatMoslehGrodet.dto.AccountCreationDTO;
import com.projet.valatMoslehGrodet.dto.AccountDTO;
import com.projet.valatMoslehGrodet.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/account")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @GetMapping
    public ResponseEntity<List<AccountDTO>> findAll()
    {
        return ResponseEntity.ok(accountService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AccountDTO> findById(@PathVariable Long id)
    {
        return ResponseEntity.ok(accountService.getById(id));
    }

    @PostMapping("/inscription")
    public ResponseEntity<AccountDTO> save(@RequestBody AccountCreationDTO accountCreationDto) {
        return ResponseEntity.ok(accountService.createAccount(accountCreationDto));
    }

}
