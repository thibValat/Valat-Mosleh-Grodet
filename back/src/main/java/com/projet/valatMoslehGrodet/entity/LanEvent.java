package com.projet.valatMoslehGrodet.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import java.util.List;

@Entity
@Table(name = "lan_event")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LanEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lan_event_id")
    private Long id;

    @ElementCollection
    @Column(name = "video_games")
    private List<String> videoGames;

    @Column(name = "console")
    @Enumerated(EnumType.STRING)
    private ConsoleType console;

    @Column(name = "bring_your_own")
    private Boolean bringYourOwn;
}
