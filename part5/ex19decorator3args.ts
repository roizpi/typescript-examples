
// Decorator with args
function Curso(config) {
    return function(target) {
        Object.defineProperty(
            target.prototype,
            'curso',
            {value: () => config.curso}
        )
    }
}

@Curso({
    curso: "Angular 6"
})
class Persona2 {

}