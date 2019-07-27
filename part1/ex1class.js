function Empleado(nombre, salario) {
    this.nombre = nombre;
    this.salario = salario;
}

Empleado.prototype.getNombre = function() {
    return this.nombre;
}

Empleado.prototype.toString = function() {
    return "Nombre: " + this.nombre + ", Salario: " + this.salario;
}
