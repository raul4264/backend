const fs = require("fs");

class Contenedor {
  constructor(file){
   
    this.file=file;
    
  }
  save(miProducto) {
   console.log('save: ',miProducto)

   fs.promises.readFile(`./${this.file}`,'utf-8')
   .then((miProducto) => {
     console.log(miProducto)
   })
   .catch((error)=>{
   console.error(error);
   });

    const productoString= JSON.stringify(miProducto,null,2);
    console.log(productoString)
     fs.promises.writeFileSync(`./${this.file}`)
  }

 /*  getById(Number) {}
  getAll() {}
  deleteById(Number) {}
  deleteAll() {}*/
} 



module.exports = Contenedor;
 