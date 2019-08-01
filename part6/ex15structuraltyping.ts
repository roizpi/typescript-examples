interface Usuario {
    nombre: string;
}

interface Usuario2 {
    nombre: string;
    rol: string;
}

class Perfil {
    nombre: string;
    rol: string;
    vehiculo?: string; // Optional

    constructor(nombre: string, rol) {
        this.nombre = nombre;
        this.rol = rol;
    }
}

// Case 1
let u: Usuario = { nombre: 'Carlos'};
u = new Perfil('Carlos', 'Engineer'); // Compatible. Usuario requires only one attrib.

// Case 2
let p: Perfil;
p = u; // Not compatible. Perfil requires 2 attribs.

// Case 3
let u2: Usuario2 = { nombre: 'Carlos', rol: 'Engineer'};
let p2: Perfil;
p2 = u2; // Compatible. Usuario2 requires at least these 2 attribs.