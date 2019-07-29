

// Without function arrow
class Padre {
    metodo() {console.log("Hola mundo");}
}
class Hija extends Padre {
    metodo() { super.metodo()}
}

// With function arrow
class Padre2 {
    metodo = () => {console.log("Hola mundo");}
}
class Hija2 extends Padre2 {
    metodo2() {this.metodo();}
}
