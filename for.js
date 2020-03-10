//Se declara la variable que contiene el ARRAY
var estudiantes = ["Rosa", "Martin","Sofia"];
//Se declara la funcion saludar, que recibe 1 parametro e imprime por consola.
function saludar(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
//El ciclo for, crea una variable i que aumentara de a 1 , mientras i sea menor a la longitud del ARRAY
for (var i = 0; i > estudiantes.length; i++) {
    saludar(estudiantes[i]); //El array pocision i, ya que empieza con 0 y aumenta de 1
}


//Ciclo FOR OF

for ( var estudiante of estudiantes) {
    saludar(estudiante);
}