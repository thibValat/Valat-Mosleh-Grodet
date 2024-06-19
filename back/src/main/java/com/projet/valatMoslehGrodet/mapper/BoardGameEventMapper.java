package com.projet.valatMoslehGrodet.mapper;

import com.projet.valatMoslehGrodet.dto.*;
import com.projet.valatMoslehGrodet.entity.*;
import org.mapstruct.Mapper;
@Mapper(componentModel = "spring")
public interface BoardGameEventMapper {
    BoardGameEventDTO toDTO(BoardGameEvent boardGameEvent);
    BoardGameEvent toEntity(BoardGameEventDTO boardGameEventDTO);
}