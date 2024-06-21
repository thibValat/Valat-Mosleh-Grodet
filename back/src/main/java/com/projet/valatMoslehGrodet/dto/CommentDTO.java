package com.projet.valatMoslehGrodet.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentDTO {
    private Long id;
    @NotNull
    private String content;
    @NotNull
    private Integer rating;
    @NotNull
    private String title;
    @NotNull
    private AccountDTO sender;
    @NotNull
    private AccountDTO target;
}