export class Dimension {
    private ancho: number;
    private alto: number;

    constructor(ancho: number, alto: number) {
        this.ancho = ancho;
        this.alto = alto;
    }
}

// TypeScript Equivalent:
export class Dimension2 {
    constructor(private ancho: number, private alto: number) {

    }
}