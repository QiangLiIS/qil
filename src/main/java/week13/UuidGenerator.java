/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package week13;

import java.util.UUID;


/**
 *
 * @author kolobj
 */
public interface UuidGenerator {

    /**
     * Each call should return a different UUID.
     */
    UUID generate();
}
