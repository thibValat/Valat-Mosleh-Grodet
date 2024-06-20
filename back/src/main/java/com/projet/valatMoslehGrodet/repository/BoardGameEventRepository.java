package com.projet.valatMoslehGrodet.repository;

import com.projet.valatMoslehGrodet.entity.BoardGameEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardGameEventRepository extends JpaRepository<BoardGameEvent, Long> {
}