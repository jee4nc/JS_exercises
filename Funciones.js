//Funcion declarativa
function mifunction() {
    return 3;
}

//Funcion expresiva

var  miFuncion = function(a,b) {
    return a + b;
}

//EJEMPLO DE FUNCTION CON TEMPLATE STRING

function saludar(estudiante) {
    console.log(`Hola ${estudiante}`);
}

saludar("Jean") // => Imprimirá mediante consola Hola Jean