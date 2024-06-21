package com.projet.valatMoslehGrodet.repository;

import com.projet.valatMoslehGrodet.entity.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    Page<Comment> findByTargetId(Long targetId, Pageable pageable);

    @Query("SELECT AVG(c.rating) FROM Comment c WHERE c.target.id = :targetId")
    double findAverageRatingByTargetId(Long targetId);
}