package com.fabio.com.service.impl;

import com.fabio.com.service.PostService;
import com.fabio.com.domain.Post;
import com.fabio.com.repository.PostRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service Implementation for managing Post.
 */
@Service
@Transactional
public class PostServiceImpl implements PostService {

    private final Logger log = LoggerFactory.getLogger(PostServiceImpl.class);

    private final PostRepository postRepository;

    public PostServiceImpl(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    /**
     * Save a post.
     *
     * @param post the entity to save
     * @return the persisted entity
     */
    @Override
    public Post save(Post post) {
        log.debug("Request to save Post : {}", post);
        return postRepository.save(post);
    }

    /**
     * Get all the posts.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<Post> findAll() {
        log.debug("Request to get all Posts");
        return postRepository.findAll();
    }

    /**
     * Get one post by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Post findOne(Long id) {
        log.debug("Request to get Post : {}", id);
        return postRepository.findOne(id);
    }

    /**
     * Delete the post by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Post : {}", id);
        postRepository.delete(id);
    }
}
