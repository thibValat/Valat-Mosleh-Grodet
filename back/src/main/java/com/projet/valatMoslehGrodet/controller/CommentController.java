package com.projet.valatMoslehGrodet.controller;

import com.projet.valatMoslehGrodet.dto.CommentDTO;
import com.projet.valatMoslehGrodet.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/comments")
public class CommentController {


    @Autowired
    private CommentService commentService;


    @PostMapping
    public ResponseEntity<CommentDTO> addComment(@RequestBody CommentDTO commentDTO) {
        CommentDTO savedComment = commentService.addComment(commentDTO);
        return new ResponseEntity<>(savedComment, HttpStatus.CREATED);
    }

    @GetMapping("/target/{targetId}")
    public ResponseEntity<Page<CommentDTO>> getCommentsByTargetId(
            @PathVariable Long targetId,
            Pageable pageable) {
        Page<CommentDTO> comments = commentService.getCommentsByTargetId(targetId, pageable);
        return ResponseEntity.ok(comments);
    }

    @GetMapping("/average-rating/{userId}")
    public ResponseEntity<Double> getAverageRatingForUser(@PathVariable Long userId) {
        double averageRating = commentService.getAverageRatingForUser(userId);
        return ResponseEntity.ok(averageRating);
    }
}