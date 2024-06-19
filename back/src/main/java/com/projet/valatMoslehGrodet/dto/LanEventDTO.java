package com.projet.valatMoslehGrodet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LanEventDTO {
    private Long id;
    private List<String> videoGames;
    private String console;
    private Boolean bringYourOwn;
}
