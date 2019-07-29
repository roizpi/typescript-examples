abstract class Figura {
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

class Cuadrado extends Figura {
    private ancho: number;

    constructor(ancho: number) {
        super(4);
        this.ancho = ancho;
    }

    area(): number {
        return this.ancho * this.ancho;
    }
}

class Circulo extends Figura {

    private radio: number;

    constructor(radio: number) {
        super(null);
        this.radio = radio;
    }

    area(): number {
        return this.radio * this.radio * 3.1416;
    }
}