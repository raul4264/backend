const fs = require("fs");

class Contenedor {
  constructor(file){
   
    this.file=file;
    
  }
  save() {
    let productos = [
      {
        id: 1,
        title: "Escuadra",
        precio: 123.45,
        thumbnail: "https://",
      },
      {
        id: 2,
        title: "Calculadora",
        precio: 234.56,
        thumbnail: "https://",
      },
      {
        id: 1,
        title: "Globo Terraqueo",
        precio: 345.67,
        thumbnail: "https://",
      },
    ];
    console.log(productos);
  }
  getById(Number) {}
  getAll() {}
  deleteById(Number) {}
  deleteAll() {}
}

const miContenedor = new Contenedor('Productos.json');
console.log(miContenedor);

module.exports = Contenedor;
 