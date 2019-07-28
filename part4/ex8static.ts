class Prueba {

    static numero: number = 0;

    static metodo() {
        alert("El valor es " + Prueba.numero);
    }
}

Prueba.numero = 5;
Prueba.metodo();