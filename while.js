//Ciclo While seria lo equivalente a un Loop, que retepetira una TAREA, mientras
// se CUMPLA una constante

//SE CREA UN ARRAY
var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

//se crea la funcion que saludará el array
function saludar(estudiante){
    console.log(`Hola, ${estudiante}`);
}

//LA FUNCION WHILE, REPETIRA UNA ACCION MIENTRAS EL ARRAY ESTUDIANTES SEA MAYOR A 0;
//SE CREA UNA VARIABLE ESTUDIANTE, QUE CONTIENE EL ARRAY ESTUDIANTES CON EL METODO SHIFT QUE VA BORRANDO
while(estudiantes.length > 0 ) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    //El metodo saludar recibe como parametro la variable "estudiante"
    saludar(estudiante);
}