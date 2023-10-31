package com.twoez.zupzup.feedback.service;


import com.twoez.zupzup.feedback.domain.Feedback;
import com.twoez.zupzup.feedback.repository.FeedbackRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class FeedbackService {

    private final FeedbackRepository feedbackRepository;

    @Transactional
    public void add(Feedback feedback) {

        feedbackRepository.save(feedback);
    }

    public Page<Feedback> searchAll(Pageable pageable) {

        return feedbackRepository.findAll(pageable);
    }
}
