/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author kolobj
 */
public class Square extends Shape {
    int side;
    public Square(String name, int side) {
        super(name);
        this.side = side;
    }

    @Override
    public double getArea() {
        return side * side;
    }
    
    public double getSide() {
        return side;
    }
    
}
