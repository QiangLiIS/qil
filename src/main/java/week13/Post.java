/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package week13;

import java.util.Date;
import java.util.UUID;
import java.util.List;
import lombok.Data;

/**
 *
 * @author kolobj
 */
@Data
public class Post {
    private UUID post_uuid;
    private String title;
    private String content;
    private Date publishing_date;
    private List categories;
}
