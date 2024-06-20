package com.projet.valatMoslehGrodet.service;

import com.projet.valatMoslehGrodet.dto.EventDTO;
import com.projet.valatMoslehGrodet.entity.Event;
import com.projet.valatMoslehGrodet.mapper.EventMapper;
import com.projet.valatMoslehGrodet.repository.EventRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EventService {
    private EventRepository eventRepository;
    private EventMapper eventMapper;


    public EventDTO createEvent(EventDTO eventDTO) {
        Event event = eventMapper.toEntity(eventDTO);
        Event savedEvent = eventRepository.save(event);
        return eventMapper.toDTO(savedEvent);
    }

    public EventDTO getEventById(Long id) {
        Event event = eventRepository.findById(id).orElseThrow(() -> new RuntimeException("Event not found"));
        return eventMapper.toDTO(event);
    }

    public List<EventDTO> getAllEvents() {
        List<Event> events = eventRepository.findAll();
        return events.stream().map(eventMapper::toDTO).collect(Collectors.toList());
    }

    public EventDTO updateEvent(Long id, EventDTO eventDTO) {
        Event existingEvent = eventRepository.findById(id).orElseThrow(() -> new RuntimeException("Event not found"));

        existingEvent.setDescription(eventDTO.getDescription());
        // todo : autres propriétés modifiables
        Event updatedEvent = eventRepository.save(existingEvent);
        return eventMapper.toDTO(updatedEvent);
    }

    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
}