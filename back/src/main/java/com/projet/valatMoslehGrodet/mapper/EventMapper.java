package com.projet.valatMoslehGrodet.mapper;

import com.projet.valatMoslehGrodet.dto.*;
import com.projet.valatMoslehGrodet.entity.*;
import org.mapstruct.Mapper;
@Mapper(componentModel = "spring", uses = {AccountMapper.class, AddressMapper.class})
public interface EventMapper {
    EventDTO toDTO(Event event);
    Event toEntity(EventDTO eventDTO);
}