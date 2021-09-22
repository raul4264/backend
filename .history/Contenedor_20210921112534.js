const fs = require("fs");

class Contenedor {
  constructor(file){
   
    this.file=file;
    
  }
  save(miProducto) {
   console.log(miProducto)
    const productoString= JSON.stringify(miProducto,null,2);
    console.log(productoString)
   // fs.promises.writeFileSync(`./${this.file}`,)
  }

 /*  getById(Number) {}
  getAll() {}
  deleteById(Number) {}
  deleteAll() {}*/
} 



module.exports = Contenedor;
 