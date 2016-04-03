/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package week13;

import java.util.LinkedList;
import java.util.List;
import lombok.Data;

/**
 *
 * @author kolobj
 */
@Data
class NewPostPayload implements Validable {
    private String title;
    private List<String> categories = new LinkedList<>();
    private String content;

    public boolean isValid() {
        return title != null && !title.isEmpty() && content != null && !content.isEmpty();
    }
}
