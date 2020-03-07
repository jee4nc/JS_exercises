var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";

alert("Bienvenido al juego de piedra papel o tijera");
alert("1. Tijera. 2. Piedra. 3. Papel.");
var pc = Math.round(Math.random()*3);
var user = prompt("Elija con nro la opción que quiere elegir.");
Number(user);
response12(user)
game(pc, user)

function response12(user) {
    if (user == 1){
        var user = tijeras;
    }
    else if (user == 2) {
        var user = piedra;
    }
    else if (user === 3 ){
        var user = papel;
    }
    else {
        var user = prompt("Opcion no valida, reingrese la opcion ")
        Number(user);
        response12(user);
    }
}




