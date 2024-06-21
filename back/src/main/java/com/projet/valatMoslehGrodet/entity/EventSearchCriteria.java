package com.projet.valatMoslehGrodet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventSearchCriteria {
    private String city;
    private EventType eventType;
    private Integer maxCapacity;
    private Float maxPrice;
    private Date date;
}
