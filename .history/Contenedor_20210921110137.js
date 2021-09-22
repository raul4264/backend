const fs = require("fs");

class Contenedor {
  constructor(file){
   
    this.file=file;
    
  }
  save(producto) {
   
    console.log('save : 'producto);
    const productoString= JSON.stringify(producto,null,2);
    console.log(productoString)
   // fs.promises.writeFileSync(`./${this.file}`,)
  }

  getById(Number) {}
  getAll() {}
  deleteById(Number) {}
  deleteAll() {}
}

const miContenedor = new Contenedor('Productos.json');
console.log(miContenedor);

module.exports = Contenedor;
 