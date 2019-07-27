public class Ex1class {

    private String nombre;
    private double salario;

    public Empleado (String nombre, double salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    public String getNombre() {
        return nombre;
    }

    public String toString() {
        return "Nombre: " + nombre + ", Salario: " + salario;
    }
}