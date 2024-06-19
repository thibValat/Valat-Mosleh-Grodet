package com.projet.valatMoslehGrodet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BoardGameEventDTO {
    private Long id;
    private List<String> boardGames;
    private Boolean bringYourOwn;
}
