
let nombre1: string;
let nombre2: string = "Hola";

let edad: number = 30;

let nombre3: string = "Manolo";

let estado: boolean = true;

let cualquierTipo:  any;
cualquierTipo = true;
cualquierTipo = 2800;
cualquierTipo = "Hola";

let nombre4: string = null;

let nombre5: string = undefined;

let primos: number[] = [1, 3, 5];

let vocales: Array<string> = ['a', 'e', 'i'];

let vocales2: string[] = ['o', 'u'];
vocales2[2] = 'o';

let primos2: number[] = [];
primos2.push(7);

enum Colores {Azul, Verde, Amarillo, Blanco};
let color: Colores = Colores.Azul;

enum Colores2 {Azul=20, Verde=5, Amarillo=3, Blanco=0};
let color2: Colores2 = Colores2.Verde;

// No value returned.
function crearLog(informacion: string): void {

}

