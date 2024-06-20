package com.projet.valatMoslehGrodet.repository;

import com.projet.valatMoslehGrodet.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
}
