/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package week13;

import java.util.List;
import java.util.UUID;

/**
 *
 * @author kolobj
 */
public interface Model {
    UUID createPost(String title, String content, List<String> categories);
    UUID createComment(UUID post, String author, String content);
    List getAllPosts();
    List getAllCommentsOn(UUID post);
    boolean existPost(UUID post);
}
