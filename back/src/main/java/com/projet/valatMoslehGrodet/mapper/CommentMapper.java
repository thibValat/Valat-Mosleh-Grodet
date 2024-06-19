package com.projet.valatMoslehGrodet.mapper;

import com.projet.valatMoslehGrodet.dto.*;
import com.projet.valatMoslehGrodet.entity.*;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {AccountMapper.class})
public interface CommentMapper {
    CommentDTO toDTO(Comment comment);
    Comment toEntity(CommentDTO commentDTO);
}