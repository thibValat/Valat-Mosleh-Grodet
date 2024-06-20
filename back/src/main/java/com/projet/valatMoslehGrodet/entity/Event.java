package com.projet.valatMoslehGrodet.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "event")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id")
    private Long id;

    @Column(name = "description")
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "organizer")
    private Account organizer;

    @Column(name = "event_type_id")
    private Long eventTypeId;

    @Column(name = "event_type")
    @Enumerated(EnumType.STRING)
    private EventType eventType;

    @Column(name = "name")
    private String name;

    @Column(name = "date")
    private Date date;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "address")
    private Address address;

    @Column(name = "capacity")
    private Integer capacity;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "event_participants",
            joinColumns = @JoinColumn(name = "event_id"),
            inverseJoinColumns = @JoinColumn(name = "account_id"))
    private List<Account> participants;

    @Column(name = "price")
    private Float price;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Demand> demands = new ArrayList<>();

    @ElementCollection
    @Column(name = "requirements")
    private List<String> requirements;

    @Column(name = "alcool_allowed")
    private Boolean alcoolAllowed;
}