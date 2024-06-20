package com.projet.valatMoslehGrodet.service;

import com.projet.valatMoslehGrodet.dto.EventDTO;
import com.projet.valatMoslehGrodet.entity.*;
import com.projet.valatMoslehGrodet.mapper.EventMapper;
import com.projet.valatMoslehGrodet.repository.*;
import lombok.AllArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EventService {
    private EventRepository eventRepository;
    private EventMapper eventMapper;

    private AccountRepository accountRepository;
    private LanEventRepository lanEventRepository;
    private BoardGameEventRepository boardGameEventRepository;
    private PartyEventRepository partyEventRepository;


    @CacheEvict(value = "events", allEntries = true)
    public EventDTO createEvent(EventDTO eventDTO) {
        Event event = eventMapper.toEntity(eventDTO);

        if (event.getEventType() == EventType.LAN_EVENT) {
            LanEvent lanEvent = new LanEvent();
            lanEvent.setBringYourOwn((Boolean) eventDTO.getAdditionalProperty("bringYourOwn"));
            lanEvent.setConsole((ConsoleType) eventDTO.getAdditionalProperty("console"));
            lanEvent.setVideoGames((List<String>) eventDTO.getAdditionalProperty("videoGames"));
            lanEvent = lanEventRepository.save(lanEvent);
            event.setEventTypeId(lanEvent.getId());
        } else if (event.getEventType() == EventType.BOARD_GAME_EVENT) {
            BoardGameEvent boardGameEvent = new BoardGameEvent();
            boardGameEvent.setBringYourOwn((Boolean) eventDTO.getAdditionalProperty("bringYourOwn"));
            boardGameEvent.setBoardGames((List<String>) eventDTO.getAdditionalProperty("boardGames"));
            boardGameEvent = boardGameEventRepository.save(boardGameEvent);
            event.setEventTypeId(boardGameEvent.getId());
        } else if (event.getEventType() == EventType.PARTY_EVENT) {
            PartyEvent partyEvent = new PartyEvent();
            partyEvent.setMusicType((List<String>) eventDTO.getAdditionalProperty("musicType"));
            partyEvent = partyEventRepository.save(partyEvent);
            event.setEventTypeId(partyEvent.getId());
        }

        Event savedEvent = eventRepository.save(event);
        return eventMapper.toDTO(savedEvent);
    }

    @Cacheable(value = "events", key = "#id")
    public EventDTO getEventById(Long id) {
        Event event = eventRepository.findById(id).orElseThrow(() -> new RuntimeException("Event not found"));
        return eventMapper.toDTO(event);
    }

    @Cacheable(value = "events", key = "#pageable.pageNumber + '-' + #pageable.pageSize")
    public List<EventDTO> getAllEvents(Pageable pageable) {
        List<Event> events = eventRepository.findAll();
        return events.stream().map(eventMapper::toDTO).collect(Collectors.toList());
    }

    @CacheEvict(value = "events", allEntries = true)
    public EventDTO updateEvent(Long id, EventDTO eventDTO) {
        return eventRepository.findById(id).map(existingEvent -> {
            Event event = eventMapper.toEntity(eventDTO);

            if (Objects.nonNull(event.getDescription())) {
                existingEvent.setDescription(event.getDescription());
            }
            if (Objects.nonNull(event.getOrganizer())) {
                existingEvent.setOrganizer(event.getOrganizer());
            }
            if (Objects.nonNull(event.getEventType())) {
                existingEvent.setEventType(event.getEventType());
            }
            if (Objects.nonNull(event.getName())) {
                existingEvent.setName(event.getName());
            }
            if (Objects.nonNull(event.getDate())) {
                existingEvent.setDate(event.getDate());
            }
            if (Objects.nonNull(event.getAddress())) {
                existingEvent.setAddress(event.getAddress());
            }
            if (Objects.nonNull(event.getCapacity())) {
                existingEvent.setCapacity(event.getCapacity());
            }
            if (Objects.nonNull(event.getPrice())) {
                existingEvent.setPrice(event.getPrice());
            }
            if (Objects.nonNull(event.getAlcoolAllowed())) {
                existingEvent.setAlcoolAllowed(event.getAlcoolAllowed());
            }

            return eventMapper.toDTO(eventRepository.save(existingEvent));
        }).orElse(null);
    }

    @CacheEvict(value = "events", allEntries = true)
    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }

    @Cacheable(value = "events", key = "#city + '-' + #eventType + '-' + #maxParticipants + '-' + #maxPrice + '-' + #date + '-' + #pageable.pageNumber + '-' + #pageable.pageSize")
    public List<EventDTO> searchEvents(String city, String eventType, Integer maxParticipants, Double maxPrice, String date, Pageable pageable) {
        List<Event> events = eventRepository.searchEvents(city, eventType, maxParticipants, maxPrice, date, pageable);
        return events.stream().map(eventMapper::toDTO).collect(Collectors.toList());
    }

    @CacheEvict(value = "events", key = "#eventId")
    public void joinEvent(Long eventId, Long participantId) {
        Event event = eventRepository.findById(eventId).orElseThrow(() -> new RuntimeException("Event not found"));
        Account participant = accountRepository.findById(participantId).orElseThrow(() -> new RuntimeException("Participant not found"));

        if (!event.getParticipants().contains(participant)) {
            event.getParticipants().add(participant);
            eventRepository.save(event);
        }
    }

    @CacheEvict(value = "events", key = "#eventId")
    public void leaveEvent(Long eventId, Long participantId) {
        Event event = eventRepository.findById(eventId).orElseThrow(() -> new RuntimeException("Event not found"));
        Account participant = accountRepository.findById(participantId).orElseThrow(() -> new RuntimeException("Participant not found"));

        if (event.getParticipants().contains(participant)) {
            event.getParticipants().remove(participant);
            eventRepository.save(event);
        }
    }

    @CacheEvict(value = "events", key = "#eventId")
    public void acceptParticipant(Long eventId, Long participantId) {
        Event event = eventRepository.findById(eventId).orElseThrow(() -> new RuntimeException("Event not found"));
        Account participant = accountRepository.findById(participantId).orElseThrow(() -> new RuntimeException("Participant not found"));

        event.getDemands().stream()
                .filter(demand -> demand.getSender().equals(participant))
                .findFirst()
                .ifPresent(demand -> {
                    demand.setIsAccepted(true);
                    eventRepository.save(event);
                });
    }

    @CacheEvict(value = "events", key = "#eventId")
    public void declineParticipant(Long eventId, Long participantId) {
        Event event = eventRepository.findById(eventId).orElseThrow(() -> new RuntimeException("Event not found"));
        Account participant = accountRepository.findById(participantId).orElseThrow(() -> new RuntimeException("Participant not found"));

        event.getDemands().removeIf(demand -> demand.getSender().equals(participant));
        eventRepository.save(event);
    }

    @CacheEvict(value = "events", key = "#eventId")
    public void addRequirement(Long eventId, String requirement) {
        Event event = eventRepository.findById(eventId).orElseThrow(() -> new RuntimeException("Event not found"));
        event.getRequirements().add(requirement);
        eventRepository.save(event);
    }

    @CacheEvict(value = "events", key = "#eventId")
    public void removeRequirement(Long eventId, String requirement) {
        Event event = eventRepository.findById(eventId).orElseThrow(() -> new RuntimeException("Event not found"));
        event.getRequirements().remove(requirement);
        eventRepository.save(event);
    }
}