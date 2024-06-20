package com.projet.valatMoslehGrodet.repository;

import com.projet.valatMoslehGrodet.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
}