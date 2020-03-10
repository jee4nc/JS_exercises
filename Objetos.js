//Variable creada con un Objeto, que contiene propiedades y valores.
//Las propiedades son las palabras CLAVE que contienen un Valor
//Tambien pueden ser Funciones, que vendria siendo los METODOS
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {
        console.log(`auto: ${this.marca} ${this.modelo} `);
        //Este metodo se ocupa la palabra THIS para indicar el ATRIBUTO de ESTE OBJETO.
    }
}

//Para llamar un dato del OBJETO, se puede realizar mediante

miAuto.modelo // ESto devolvera "Corolla"
miAuto.detallesDelAuto() //Esto devolvera el console.log

//Creacion de metodo constructor = Funcion que permite crear nuevos objetos a partir de un esquema 

function auto(marca, modelo, annio) { //recibe como parametros, los atributos que quiero que tenga el object
    this.marca = marca;     //Se declara this.atributo y se le asigna como valor el 
    this.modelo = modelo;   //parametro que recibe la funcion 
    this.annio = annio;     // this.marca recibe el parametro marca
}

var nuevoAuto = new auto("Tesla","MOdel 3",2020); //Esta nueva variable
                                //Instancia la palabra reservada NEW que permite generar un nuevo objeto
                                //a partir de un constructot y como toda funcion
                                //se debe dar los parametros, que serian los valores de los atributos
