


function hacerTareaAsincrona() {

    var error = false;

    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Trabajo asíncrono completo");

            if(error)
                reject("error");
            else
                resolve("hecho");

        }, 1000);
    });
    return promise;
}

// we can chain as many then() handlers as we need.
// then() has two args, the first arg is the success handler,
// the second one is the error handler but we can use catch() function instead.
hacerTareaAsincrona().then(
    (val) => {throw new Error("error") },
    //(err) => console.log(err)
).then(
    (val) => console.log(val),
    //(err) => console.log(err)
).catch((err => console.error(err)));