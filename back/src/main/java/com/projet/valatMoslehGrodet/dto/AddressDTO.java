package com.projet.valatMoslehGrodet.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressDTO {
    private Long id;
    @NotNull
    private String city;
    @NotNull
    private String postCode;
    @NotNull
    private String streetName;
    @NotNull
    private String streetNumber;
}
