package com.projet.valatMoslehGrodet.repository;

import com.projet.valatMoslehGrodet.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountRepository extends JpaRepository<Account, Long> {
    public Account findByEmail(String email);
    List<Account> findByFirstNameAndLastName(String firstName, String lastName);



}
