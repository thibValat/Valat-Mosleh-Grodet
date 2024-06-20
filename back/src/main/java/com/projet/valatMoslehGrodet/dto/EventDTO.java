package com.projet.valatMoslehGrodet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventDTO {
    private Long id;
    private String description;
    private AccountDTO organizer;
    private Long eventTypeId;
    private String eventType;
    private String name;
    private Date date;
    private AddressDTO address;
    private Integer capacity;
    private List<AccountDTO> participants;
    private Float price;
    private List<DemandDTO> demands;
    private List<String> requirements;
    private Boolean alcoolAllowed;
    private Map<String, Object> additionalProperties = new HashMap<>();

    public void setAdditionalProperty(String key, Object value) {
        additionalProperties.put(key, value);
    }

    public Object getAdditionalProperty(String key) {
        return additionalProperties.get(key);
    }
}