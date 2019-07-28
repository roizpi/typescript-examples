class Prueba {

    public a: number;
    protected b: number;
    private c: number;

    //
    metodo(): void {
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
    }
}

// Outside the class:
var prueba: Prueba = new Prueba();
console.log(prueba.a); // OK
console.log(prueba.b); // ERROR: protected
console.log(prueba.c); // ERROR: private

//
class PruebaHija extends Prueba {

    metodo2(): void {
        console.log(this.a); // OK
        console.log(this.b); // OK
        console.log(this.c); // NOT OK
    }
}