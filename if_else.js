var piedra = 2;
var papel = 3;
var tijeras = 1;

alert("Bienvenido al juego de piedra papel o tijera");
alert("1. Tijera. 2. Piedra. 3. Papel.");
var pc = Math.round(Math.random()*3);  //Metodo que me permite poder dar un numero al azar entre 1 y 3 y redondearlo a un entero
var user = prompt("Elija con nro la opción que quiere elegir."); //prompt permite pedir datos al usuario
Number(user); //Me aseguro de que sean de tipo number ambas variables
Number(pc);
response12(user)
selectedpc(pc)
game(pc, user)

function response12(user) {
    if (user == 1){
        var user = tijeras;
    }
    else if (user == 2) {
        var user = piedra;
    }
    else if (user == 3 ){
        var user = papel;
    }
    else {
        var user = prompt("Opcion no valida, reingrese la opcion ")
        Number(user);
        response12(user);
    }
}

function selectedpc(pc) {
    if (pc  == 1){
        var pc = tijeras;
    }
    else if (pc == 2) {
        var pc = piedra;
    }
    else if (pc == 3) {
        var pc = papel;
    }
    else{
        alert("Alguna vaina ah pasao")
    }
}

function game(pc , user) {
    if (user == tijeras && pc == papel) {
        alert("La maquina eligio papel y tu tijeras Ganaste!");
    }
    else if (user == piedra && pc == tijeras) {
        alert("La maquina eligio tijeras y tu piedra , Ganaste!");
    }
    else if (user == papel && pc == piedra) {
        alert("La maquina eligio piedra y tu papel, Ganaste!");
    }
    else if (user == tijeras && pc == piedra){
        alert("La maquina eligio piedra y tu tijeras, Perdiste!");
    }
    else if (user == piedra && pc == papel) {
        alert("La maquina eligio papel y tu piedra , Perdiste!");
    }
    else if (user == papel && pc == tijeras) {
        alert("La maquina eligio tijeras y tu papel, Perdiste!");
    }
    else if (user == pc) {
        alert("Eligieron lo mismo, Empate!");
    }
    else{
        alert("Algo ha pasao :O!");
        alert("Error ")
    }
}




