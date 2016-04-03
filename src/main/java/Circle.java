/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author kolobj
 */
public class Circle extends Shape {
    int radius;
    public Circle(String name, int radius) {
        super(name);
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return 3.14 * radius * radius;
    }
    
    public double getRadius() {
        return radius;
    }
    
}
