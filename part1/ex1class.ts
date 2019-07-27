export class Empleado {

    private nombre: string;
    private salario: number;

    constructor(nombre: string, salario: number) {
        this.nombre = nombre;
        this.salario = salario;
    }

    getNombre(): string {
        return this.nombre;
    }

    toString(): string {
        return "Nombre:" + this.nombre + ", Salario: " + this.salario;
    }
}