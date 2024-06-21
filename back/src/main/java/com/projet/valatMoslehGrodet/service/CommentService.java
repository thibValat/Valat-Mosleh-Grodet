package com.projet.valatMoslehGrodet.service;

import com.projet.valatMoslehGrodet.dto.CommentDTO;
import com.projet.valatMoslehGrodet.entity.Account;
import com.projet.valatMoslehGrodet.entity.Comment;
import com.projet.valatMoslehGrodet.mapper.CommentMapper;
import com.projet.valatMoslehGrodet.repository.AccountRepository;
import com.projet.valatMoslehGrodet.repository.CommentRepository;
import lombok.AllArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@AllArgsConstructor
public class CommentService {

    private CommentRepository commentRepository;
    private AccountRepository accountRepository;
    private CommentMapper commentMapper;

    @CacheEvict(value = {"comments", "userRating"}, key = "#commentDTO.target.id")
    public CommentDTO addComment(CommentDTO commentDTO) {
        Comment comment = commentMapper.toEntity(commentDTO);
        Account sender = accountRepository.findById(commentDTO.getSender().getId())
                .orElseThrow(() -> new RuntimeException("Sender not found"));
        Account target = accountRepository.findById(commentDTO.getTarget().getId())
                .orElseThrow(() -> new RuntimeException("Target not found"));
        comment.setSender(sender);
        comment.setTarget(target);
        Comment savedComment = commentRepository.save(comment);

        updateUserRating(target);

        return commentMapper.toDTO(savedComment);
    }

    private void updateUserRating(Account account) {
        double averageRating = commentRepository.findAverageRatingByTargetId(account.getId());
        account.setRating((float) averageRating);
        accountRepository.save(account);
    }

    @Cacheable(value = "comments", key = "#targetId + '-' + #pageable.pageNumber + '-' + #pageable.pageSize")
    public Page<CommentDTO> getCommentsByTargetId(Long targetId, Pageable pageable) {
        Page<Comment> comments = commentRepository.findByTargetId(targetId, pageable);
        return comments.map(commentMapper::toDTO);
    }

    @Cacheable(value = "userRating", key = "#userId")
    public double getAverageRatingForUser(Long userId) {
        Account account = accountRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return account.getRating();
    }
}