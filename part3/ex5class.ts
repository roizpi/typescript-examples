class Cliente{
    nombre: string;
    edad: number;

    info(): string {
        return this.nombre + " tiene: " + this.edad + " años";
    }
}

// Variable declaration.
var cliente: Cliente;

// Create the instance.
cliente = new Cliente();

cliente.nombre = "Carlos";
cliente.edad = 40;

cliente.info();

