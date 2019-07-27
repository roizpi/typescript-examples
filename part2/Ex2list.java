import part1.*;

public class Ex2list {

    public static void main(String [] args) {
        List<Empleado> empleados = new ArrayList<>();

        empleados.add(new Empleado('Marina', 600));
        empleados.add(new Empleado('Alfredo', 800));

        for (Empleado emp: empleados) {
            System.out.println(emp.getNombre());
        }

        empleados.forEach(emp -> {
            System.out.println(emp);
        });
    }
}