package com.projet.valatMoslehGrodet.mapper;

import com.projet.valatMoslehGrodet.dto.DemandDTO;
import com.projet.valatMoslehGrodet.entity.Demand;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {AccountMapper.class})
public interface DemandMapper {
    @Mapping(source = "event.id", target = "eventId")
    DemandDTO toDTO(Demand demand);

    @Mapping(source = "eventId", target = "event.id")
    Demand toEntity(DemandDTO demandDTO);
}