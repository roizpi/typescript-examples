import {Empleado} from "../part1/ex1class";
let empleados = new Array<Empleado>();

empleados.push(new Empleado('Marina', 600));
empleados.push(new Empleado('Alfredo', 800));

for (let emp of empleados) {
    console.log(emp.getNombre());
}

empleados.forEach(emp => console.log(emp));

