package com.projet.valatMoslehGrodet.mapper;

import com.projet.valatMoslehGrodet.dto.EventDTO;
import com.projet.valatMoslehGrodet.entity.Event;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = {AccountMapper.class, AddressMapper.class, DemandMapper.class})
public interface EventMapper {
    EventDTO toDTO(Event event);
    Event toEntity(EventDTO eventDTO);

    List<EventDTO> toDTOs(List<Event> events);
    List<Event> toEntities(List<EventDTO> eventDTOs);
}