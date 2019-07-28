// ES5 function
setTimeout(function() {
    console.log("w/e")
}, 1000);

// ES6 function
setTimeout(() => {
    console.log("w/e");
}, 1000);

setTimeout(() => console.log("w/e"));

// ES5 args
let suma = function(a, b){
    return a+b;
};

// ES6 args
let suma2 = (a, b) => a + b;


// E5 this ref - working
let obj = {
    nombre: "Alfredo",
    ejemplo: function() {
        console.log(this.nombre)
    }
};

// ES5 this ref - undefined
let obj2 = {
    nombre: "Alfredo",
    ejemplo: function() {
        setTimeout(function () {
            console.log(this.nombre);
        }, 1000);
    }
};

// ES5 this ref - workaround
let obj3= {
    nombre: "Alfredo",
    ejemplo: function() {
        setTimeout(function () {
            console.log(this.nombre);
        }.bind(this), 1000);
    }
};

// ES6 this ref - fix
let obj4 = {
    nombre: "Alfredo",
    ejemplo: function() {
        console.log(this);
        setTimeout(() => {
            console.log(this.nombre);
        }, 1000);
    }
};