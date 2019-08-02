@curso
class Persona {
    nombre;
    apellidos;

    constructor(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
}

// target is the constructor of the class.
function curso(target) {
    // Dynamically adds a function to the target class.
    Object.defineProperty(
        target.prototype, 'curso', {value: () => "Angular 6"}
    )
}


// test
let persona = new Persona("Tito", "Ramos");
console.log(persona.curso());
