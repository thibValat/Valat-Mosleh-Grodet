package com.projet.valatMoslehGrodet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountDTO {
    private Long id;
    private String password;
    private String email;
    private AddressDTO address;
    private Date birthDate;
    private List<String> preferences;
    private Float rating;
    private List<CommentDTO> comments;
    private String description;
    private List<EventDTO> events;
}
