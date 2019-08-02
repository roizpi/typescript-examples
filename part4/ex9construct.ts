class Cliente2 {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad:number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    info() {
        console.log("Su nombre es " + this.nombre + ".");
    }

}