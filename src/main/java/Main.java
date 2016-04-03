
import static spark.Spark.*;

import routes.*;
import week13.Model;
import week13.Sql2oModel;
import week13.Week13Routes;
import java.util.UUID;
import org.sql2o.Sql2o;
import org.sql2o.converters.UUIDConverter;
import org.sql2o.quirks.PostgresQuirks;

public class Main {

  public static void main(String[] args) {

    port(Integer.valueOf(System.getenv("PORT")));
    staticFileLocation("/public");

    //Object r = new JavaGettingStarted();
    //Object r = new Week6Routes();
    //Object r = new Week7Routes();
    //Object r = new Student1ProjectRoutes();
    
    Sql2o sql2o = new Sql2o(
            System.getenv().get("DATABASE_URL"),
            System.getenv().get("DATABASE_USER"), 
            System.getenv().get("DATABASE_PASSWORD"), 
            new PostgresQuirks() {
        {
            // make sure we use default UUID converter.
            converters.put(UUID.class, new UUIDConverter());
        }
    });
    
    Object r = new Week13Routes(sql2o);
    
  }

}
