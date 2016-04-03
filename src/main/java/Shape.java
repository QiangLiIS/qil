/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author kolobj
 */
public abstract class Shape {
    private String name;
    public String getName() { return name; }
    
    public Shape(String name) {
        this.name = name;
    }
    
    public abstract double getArea();
    
    
    
}
