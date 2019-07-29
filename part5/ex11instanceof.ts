
// instanceof without casting, unlike Java.
class Animal { comer() { }}

class Perro extends Animal { guau() { }}

class Gato extends Animal { miau() { }}

var mascota: Animal = undefined;
if (mascota instanceof Perro) {
    mascota.guau();
} else if (mascota instanceof Gato) {
    mascota.miau();
} else {
    mascota.comer();
}