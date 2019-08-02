
class Figura {
    nombre: string;
    lados: number;

    constructor(nombre: string, lados: number) {
        this.nombre = nombre;
        this.lados = lados;
    }

    mostrar() {
        console.log("El " + this.nombre + " tiene " + this.lados + " lados.");
    }
}

class Cuadrado extends Figura {

    constructor(nombre: string) {
        super(nombre, 4);
    }

    // Method overwrite.
    mostrar() {
        super.mostrar(); // use old implementation.
        console.log("Información de la clase Cuadrado");
    }

}

var cuadrado: Cuadrado = new Cuadrado("rectángulo");
cuadrado.mostrar(); // 1."El rectángulo tiene 4 lados"  2."Información de la clase Cuadrado"