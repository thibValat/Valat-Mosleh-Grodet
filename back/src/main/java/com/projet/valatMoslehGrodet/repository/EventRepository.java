package com.projet.valatMoslehGrodet.repository;

import com.projet.valatMoslehGrodet.entity.Event;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

    @Query("SELECT e FROM Event e WHERE " +
            "(:city IS NULL OR e.address.city = :city) AND " +
            "(:eventType IS NULL OR e.eventType = :eventType) AND " +
            "(:maxParticipants IS NULL OR e.capacity <= :maxParticipants) AND " +
            "(:maxPrice IS NULL OR e.price <= :maxPrice) AND " +
            "(:date IS NULL OR e.date = :date)")
    List<Event> searchEvents(@Param("city") String city,
                             @Param("eventType") String eventType,
                             @Param("maxParticipants") Integer maxParticipants,
                             @Param("maxPrice") Double maxPrice,
                             @Param("date") String date,
                             Pageable pageable);
}