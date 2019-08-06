


// op 1
var dimensiones = {
    altura: 40,
    anchura: 200
};

// op 2
interface Dimensiones {
    altura: number;
    anchura: number;
    profundidad?: number;
}

function crearFigura(dim: Dimensiones) {

}

crearFigura({altura: 10, anchura: 20});
crearFigura({altura: 10, anchura: 20, profundidad: 5});
crearFigura({altura: 10, anchura: 20, otro: 5}); // error: inexistente