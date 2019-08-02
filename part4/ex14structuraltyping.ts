interface Usuario {
    nombre: string;
}

class Perfil {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
}

let u: Usuario = { nombre: 'Carlos' };
u = new Perfil('Carlos');