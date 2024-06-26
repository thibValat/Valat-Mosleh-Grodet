package com.projet.valatMoslehGrodet.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.BatchSize;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "account",indexes = {
        @Index(name = "idx_account_email", columnList = "email"),
        @Index(name = "idx_account_firstName_lastName", columnList = "firstName,lastName")
})
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private Long id;

    @Column(name = "firstName", nullable = false)
    private String firstName;

    @Column(name = "lastName", nullable = false)
    private String lastName;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "address")
    private Address address;

    @Column(name = "birth_date")
    private Date birthDate;

    @ElementCollection
    @Column(name = "preferences")
    private List<String> preferences;

    @Column(name = "rating")
    private Float rating;

    @OneToMany(mappedBy = "target", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @BatchSize(size = 10)
    private List<Comment> comments;

    @Column(name = "description")
    private String description;

    @ManyToMany(mappedBy = "participants", fetch = FetchType.LAZY)
    @BatchSize(size = 10)
    private List<Event> events;

}
