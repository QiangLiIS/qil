/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package week13;

import lombok.Data;

/**
 *
 * @author kolobj
 */
@Data
class NewCommentPayload implements Validable {
    private String author;
    private String content;

    public boolean isValid() {
        return author != null && !author.isEmpty() && content != null && !content.isEmpty();
    }
}
