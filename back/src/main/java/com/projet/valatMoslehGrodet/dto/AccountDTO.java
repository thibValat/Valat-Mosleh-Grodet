package com.projet.valatMoslehGrodet.dto;

import jakarta.validation.constraints.NotNull;
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
    @NotNull
    private String firstname;
    @NotNull
    private String lastName;
    @NotNull
    private String password;
    @NotNull
    private String email;
    @NotNull
    private AddressDTO address;
    @NotNull
    private Date birthDate;
    private List<String> preferences;
    private Float rating;
    private List<CommentDTO> comments;
    private String description;
    private List<EventDTO> events;
}
