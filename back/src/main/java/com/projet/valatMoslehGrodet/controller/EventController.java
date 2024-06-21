package com.projet.valatMoslehGrodet.controller;

import com.projet.valatMoslehGrodet.dto.EventDTO;
import com.projet.valatMoslehGrodet.entity.EventSearchCriteria;
import com.projet.valatMoslehGrodet.entity.EventType;
import com.projet.valatMoslehGrodet.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {
    @Autowired
    private EventService eventService;


    @PostMapping
    public ResponseEntity<EventDTO> createEvent(@RequestBody EventDTO eventDTO) {
        EventDTO createdEvent = eventService.createEvent(eventDTO);
        return new ResponseEntity<>(createdEvent, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EventDTO> getEventById(@PathVariable Long id) {
        EventDTO eventDTO = eventService.getEventById(id);
        return new ResponseEntity<>(eventDTO, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<EventDTO>> getAllEvents(@RequestParam(defaultValue = "0") int page,
                                                       @RequestParam(defaultValue = "5") int size)
    {
        List<EventDTO> events = eventService.getAllEvents(PageRequest.of(page, size));
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EventDTO> updateEvent(@PathVariable Long id, @RequestBody EventDTO eventDTO) {
        EventDTO updatedEvent = eventService.updateEvent(id, eventDTO);
        return new ResponseEntity<>(updatedEvent, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/search")
    public ResponseEntity<List<EventDTO>> searchEvents(
            @RequestParam(required = false) String city,
            @RequestParam(required = false) EventType eventType,
            @RequestParam(required = false) Integer maxCapacity,
            @RequestParam(required = false) Float maxPrice,
            @RequestParam(required = false) Date date,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        EventSearchCriteria criteria = new EventSearchCriteria(city, eventType, maxCapacity, maxPrice, date);
        Pageable pageable = PageRequest.of(page, size);

        List<EventDTO> events = eventService.searchEvents(criteria, pageable);
        return ResponseEntity.ok(events);
    }

    @PostMapping("/{id}/join")
    public ResponseEntity<Void> joinEvent(@PathVariable Long id, @RequestParam Long participantId) {
        eventService.joinEvent(id, participantId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/{id}/leave")
    public ResponseEntity<Void> leaveEvent(@PathVariable Long id, @RequestParam Long participantId) {
        eventService.leaveEvent(id, participantId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/{id}/accept-participant")
    public ResponseEntity<Void> acceptParticipant(@PathVariable Long id, @RequestParam Long participantId) {
        eventService.acceptParticipant(id, participantId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/{id}/decline-participant")
    public ResponseEntity<Void> declineParticipant(@PathVariable Long id, @RequestParam Long participantId) {
        eventService.declineParticipant(id, participantId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/{id}/add-requirement")
    public ResponseEntity<Void> addRequirement(@PathVariable Long id, @RequestParam String requirement) {
        eventService.addRequirement(id, requirement);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/{id}/remove-requirement")
    public ResponseEntity<Void> removeRequirement(@PathVariable Long id, @RequestParam String requirement) {
        eventService.removeRequirement(id, requirement);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}