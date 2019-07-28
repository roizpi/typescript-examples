
class Calculadora {

    suma(valor1: number, valor2: number): number {
        return valor1 + valor2;
    }

    // optional arg, with default value.
    any(num1: number, num2: number, msg: string = "sin operación") {
        alert(msg);
    }
}

var calculadora: Calculadora = new Calculadora();
alert(calculadora.suma(2, 3));

// "restar"
calculadora.any(2, 3, "restar");

// "sin operación"
calculadora.any(2, 3);