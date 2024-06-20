package com.projet.valatMoslehGrodet.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LanEventDTO {
    private Long id;
    @NotNull
    private List<String> videoGames;
    @NotNull
    private String console;
    @NotNull
    private Boolean bringYourOwn;
}
