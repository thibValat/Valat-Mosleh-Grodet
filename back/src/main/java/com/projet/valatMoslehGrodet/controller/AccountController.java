package com.projet.valatMoslehGrodet.controller;

import com.projet.valatMoslehGrodet.dto.AccountCreationDTO;
import com.projet.valatMoslehGrodet.dto.AccountDTO;
import com.projet.valatMoslehGrodet.dto.AccountSignInDTO;
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

    @PutMapping("/update/{id}")
    public ResponseEntity<AccountDTO> update(@PathVariable Long id, @RequestBody AccountDTO acountDTO) {
        return ResponseEntity.ok(accountService.update(id, acountDTO));
    }

    @PostMapping("/inscription")
    public ResponseEntity<AccountDTO> save(@RequestBody AccountCreationDTO accountCreationDto) {
        return ResponseEntity.ok(accountService.createAccount(accountCreationDto));
    }

    @PostMapping("/login")
    public ResponseEntity<AccountDTO> signIn(@RequestBody AccountSignInDTO accountSignInDTO){
        return ResponseEntity.ok(accountService.logInAccount(accountSignInDTO));

    }
    @DeleteMapping("{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        accountService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/findByFullName")
    public ResponseEntity<List<AccountDTO>> findByFullName(@RequestParam String firstName, @RequestParam String lastName)
    {
        return ResponseEntity.ok(accountService.getAccountByFullName(firstName, lastName));
    }

}
