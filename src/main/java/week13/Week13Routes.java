/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package week13;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.google.gson.Gson;
import com.google.gson.JsonParseException;
import java.io.IOException;
import java.io.StringWriter;
import static java.net.HttpURLConnection.HTTP_BAD_REQUEST;
import java.util.UUID;
import org.sql2o.Sql2o;
import static spark.Spark.get;
import static spark.Spark.post;

/**
 *
 * @author kolobj
 */
public class Week13Routes {
    public static String dataToJson(Object data) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.enable(SerializationFeature.INDENT_OUTPUT);
            StringWriter sw = new StringWriter();
            mapper.writeValue(sw, data);
            return sw.toString();
        } catch (IOException e){
            throw new RuntimeException("IOException from a StringWriter?");
        }
    }

    Gson gson = new Gson();
    Model model;
    public Week13Routes(Sql2o sql2o) {
        this.model = new Sql2oModel(sql2o);
        setupRoutes();
    }

    private void setupRoutes() {
        // insert a post (using HTTP post method)
    post("/posts", (request, response) -> {
        ObjectMapper mapper = new ObjectMapper();
        NewPostPayload creation = mapper.readValue(request.body(), NewPostPayload.class);
        if (!creation.isValid()) {
            response.status(HTTP_BAD_REQUEST);
            return "";
        }
        UUID id = model.createPost(creation.getTitle(), creation.getContent(), creation.getCategories());
        response.status(200);
        response.type("application/json");
        return id;
    });

    // get all post (using HTTP get method)
    get("/posts", (request, response) -> {
        response.status(200);
        response.type("application/json");
        return dataToJson(model.getAllPosts());
    });

    post("/posts/:uuid/comments", (request, response) -> {
        ObjectMapper mapper = new ObjectMapper();
        NewCommentPayload creation = mapper.readValue(request.body(), NewCommentPayload.class);
        if (!creation.isValid()) {
            response.status(HTTP_BAD_REQUEST);
            return "";
        }
        UUID post = UUID.fromString(request.params(":uuid"));
        if (!model.existPost(post)){
            response.status(400);
            return "";
        }
        UUID id = model.createComment(post, creation.getAuthor(), creation.getContent());
        response.status(200);
        response.type("application/json");
        return id;
    });

    get("/posts/:uuid/comments", (request, response) -> {
        UUID post = UUID.fromString(request.params(":uuid"));
        if (!model.existPost(post)) {
            response.status(400);
            return "";
        }
        response.status(200);
        response.type("application/json");
        return dataToJson(model.getAllCommentsOn(post));
    });
    }
    
}
