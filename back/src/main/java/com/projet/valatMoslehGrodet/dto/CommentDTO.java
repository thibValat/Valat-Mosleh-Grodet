package com.projet.valatMoslehGrodet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentDTO {
    private Long id;
    private String content;
    private Integer rating;
    private String title;
    private AccountDTO sender;
    private AccountDTO target;
}