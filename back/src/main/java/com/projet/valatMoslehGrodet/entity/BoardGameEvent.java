package com.projet.valatMoslehGrodet.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import java.util.List;

@Entity
@Table(name = "board_game_event")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class BoardGameEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_game_event_id")
    private Long id;

    @ElementCollection
    @Column(name = "board_games")
    private List<String> boardGames;

    @Column(name = "bring_your_own")
    private Boolean bringYourOwn;
}