package com.projet.valatMoslehGrodet.dto;

import jakarta.validation.constraints.NotNull;
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
    @NotNull
    private String description;
    private AccountDTO organizer;
    private Long eventTypeId;
    @NotNull
    private String eventType;
    @NotNull
    private String name;
    @NotNull
    private Date date;
    @NotNull
    private AddressDTO address;
    @NotNull
    private Integer capacity;
    private List<AccountDTO> participants;
    @NotNull
    private Float price;
    private List<DemandDTO> demands;
    @NotNull
    private List<String> requirements;
    @NotNull
    private Boolean alcoolAllowed;
    private Map<String, Object> additionalProperties = new HashMap<>();

    public void setAdditionalProperty(String key, Object value) {
        additionalProperties.put(key, value);
    }

    public Object getAdditionalProperty(String key) {
        return additionalProperties.get(key);
    }
}