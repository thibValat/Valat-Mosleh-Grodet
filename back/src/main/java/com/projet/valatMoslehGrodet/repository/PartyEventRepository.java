package com.projet.valatMoslehGrodet.repository;

import com.projet.valatMoslehGrodet.entity.PartyEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PartyEventRepository extends JpaRepository<PartyEvent, Long> {
}