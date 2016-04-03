/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package week13;

import java.util.Date;
import java.util.UUID;
import lombok.Data;

/**
 *
 * @author kolobj
 */
@Data
public class Comment {
    UUID comment_uuid;
    UUID post_uuid;
    String author;
    String content;
    boolean approved;
    Date submission_date;
}
