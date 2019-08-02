abstract class Figura2 {
    private lados: number;

    constructor(lados: number) {
        this.lados = lados;
    }

    informacion() {
        console.log('Tengo '+this.lados+ " lados.")
    }

    // Abstract method
    abstract area(): number;
}

class Cuadrado2 extends Figura2 {
    private ancho: number;

    constructor(ancho: number) {
        super(4);
        this.ancho = ancho;
    }

    area(): number {
        return this.ancho * this.ancho;
    }
}

class Circulo extends Figura2 {

    private radio: number;

    constructor(radio: number) {
        super(null);
        this.radio = radio;
    }

    area(): number {
        return this.radio * this.radio * 3.1416;
    }
}