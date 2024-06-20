package com.projet.valatMoslehGrodet.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import java.util.List;

@Entity
@Table(name = "party_event")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class PartyEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "party_event_id")
    private Long id;

    @ElementCollection
    @Column(name = "music_type")
    private List<String> musicType;
}
