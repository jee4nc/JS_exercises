function makeAutos(marca,modelo,annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

for (var i = 0; i<30; i++) {
    var auto = new makeAutos(`Tesla ${i}`,`Modelo ${i}`, `Año 2020`);
    console.log(`Hola, este auto es de Marca ${auto.marca} y modelo ${auto.modelo} del ${auto.annio}`);
}