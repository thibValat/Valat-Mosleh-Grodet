package com.projet.valatMoslehGrodet.repository;

import com.projet.valatMoslehGrodet.entity.LanEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LanEventRepository extends JpaRepository<LanEvent, Long> {
}