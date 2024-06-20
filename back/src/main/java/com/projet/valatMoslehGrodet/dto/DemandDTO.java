package com.projet.valatMoslehGrodet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DemandDTO {
    private Long id;
    private AccountDTO sender;
    private Boolean isAccepted;
    private Long eventId;

}