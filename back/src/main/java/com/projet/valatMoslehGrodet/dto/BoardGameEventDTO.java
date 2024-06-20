package com.projet.valatMoslehGrodet.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BoardGameEventDTO {
    private Long id;
    @NotNull
    private List<String> boardGames;
    @NotNull
    private Boolean bringYourOwn;
}
