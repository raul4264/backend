const fs = require("fs");

class Contenedor {
  constructor(file){
   
    this.file=file;
    
  }
  save(producto) {
   console.log('save: ',producto)

   fs.promises.readFile(`./${this.file}`,'utf-8')
   .then((contenido) => {
     if(contenido === ''){
          producto.id=0;
          return producto
     }
     console.log(contenido)
   })
   .catch((error)=>{
   console.error(error);
   });

    const productoString= JSON.stringify(producto,null,2);
    console.log(productoString)

     fs.writeFileSync(`./${this.file}`,productoString)
  }

 /*  getById(Number) {}
  getAll() {}
  deleteById(Number) {}
  deleteAll() {}*/
} 



module.exports = Contenedor;
 