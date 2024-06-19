package com.projet.valatMoslehGrodet.mapper;

import com.projet.valatMoslehGrodet.dto.*;
import com.projet.valatMoslehGrodet.entity.*;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


@Mapper(componentModel = "spring")
public interface LanEventMapper {
    LanEventDTO toDTO(LanEvent lanEvent);
    LanEvent toEntity(LanEventDTO lanEventDTO);
}