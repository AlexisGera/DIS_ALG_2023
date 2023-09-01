/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package tarea.pkg5.menor.y.indice;

/**
 *
 * @author sergi
 */
public class Tarea5MenorYIndice {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        int[] num={15, 22, 8, 12, 3, 5, 12};
        int min=num [0];
        int indice = 0;
        for (
            int i=1;
                i<num.length;
                i++)
                     {if (num[i]< min)
                             {min=num[i];
                             indice=i;
                             }
                     }
                
         System.out.println("El numero mas pequeno es "+ min );      
        System.out.println("El indicen del numero mas pequeno es "+ indice );
        
    }
    
}
