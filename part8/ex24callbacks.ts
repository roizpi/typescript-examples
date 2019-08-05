

// 2
function tareaAsincrona(cb) {
    setTimeout( () => {
        console.log("Tarea asíncrona");
        cb();
    }, 1000);
}

// 3
this.tareaAsincrona(() => {
    console.log("Tarea callback");
});


// 1
console.log("Después de la llamada a tareaAsincrona");