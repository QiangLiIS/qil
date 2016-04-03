/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package routes;

import com.google.gson.Gson;
import java.sql.Connection;

import java.util.HashMap;
import java.util.Map;

import spark.template.freemarker.FreeMarkerEngine;
import spark.ModelAndView;
import static spark.Spark.get;

import com.heroku.sdk.jdbc.DatabaseUrl;
import java.text.SimpleDateFormat;
import java.util.Date;
import static spark.Spark.get;


/**
 *
 * @author kolobj
 */
public class Student1ProjectRoutes {

    Gson gson = new Gson();

    public Student1ProjectRoutes() {
        setupRoutes();
    }

    private void setupRoutes() {
            get("/assets", (req, res) -> {
                Map<String, Object> attributes = new HashMap<>();

                SimpleDateFormat formatter = new SimpleDateFormat("EEEE");
                String dayOfWeek = formatter.format(new Date());
                attributes.put("title", "Wicked Assets");
                attributes.put("dayOfWeek", dayOfWeek);
               
                return new ModelAndView(attributes, "student1project/assets.ftl");
              }, new FreeMarkerEngine());
    }
                
    
    
}
