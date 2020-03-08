var piedra = 2;
var papel = 3;
var tijeras = 1;
var pc = Math.round(Math.random()*3);
alert("Bienvenido al juego de Piedra, Papel y Tijeras");
var user = prompt("Elija su opción : 1. Tijera. 2. Piedra. 3. Papel.");



function pcnocero(pc) {
    if (pc == 0) {
        var pc = 1;
    }else {
        alert("La pc acabo de elegir.")
    }
    
}

function validation (user) {
    switch (user) {
        case "1" : 
            var user = 1;
            break;
        case "2" :
            var user = 2;
            break;
        case "3" :
            var user = 3;
            break;
        default :
            var user = prompt("Opcion no valida, reingrese la opcion ")
            validation(user);
    }
}


function game(user , pc) { //El error se debe a que puce primero USER Y DPS PC EN LOS PARAMETROS, Y EN LA VALIDACION DEL IF
                            // PUSE PRIMERO PC Y DESPUES USER
    if (user == 1 && pc == 3) {
        alert("Maquina : papel || Tu: Tijeras ¡Ganaste!");
    }
    else if (user == 2 && pc == 1) {
        alert("Maquina : Tijeras || Tu: Piedra  ¡Ganaste!");
    }
    else if (user == 3 && pc == 2) {
        alert("Maquina: Piedra || Tu Papel  ¡Ganaste!");
    }
    else if (user == 1 && pc == 2){
        alert("Maquina: Piedra || Tu: Tijeras ¡Perdiste! :(");
    }
    else if (user == 2 && pc == 3) {
        alert("Maquina: Papel || Tu: Piedra  ¡Perdiste! :(");
    }
    else if (user == 3 && pc == 1) {
        alert("Maquina: Tijeras || Tu: Papel ¡Perdiste!:(");
    }
    else if (user == pc) {
        alert("Eligieron lo mismo, Empate!");
    }
    else{
        alert("Algo ha pasao :O!");
        alert("Error ")
    }
}



validation(user);
pcnocero(pc)
game(user, pc);