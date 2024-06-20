package com.projet.valatMoslehGrodet.mapper;

import com.projet.valatMoslehGrodet.dto.*;
import com.projet.valatMoslehGrodet.entity.*;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = {AddressMapper.class})
public interface AccountMapper {
    AccountDTO toDTO(Account account);
    Account toEntity(AccountDTO accountDTO);
    Account toEntity(AccountCreationDTO accountCreationDTO);
    List<Account> toEntities(List<AccountDTO> etudiantsDto);

    List<AccountDTO> toDtos(List<Account> etudiants);


}