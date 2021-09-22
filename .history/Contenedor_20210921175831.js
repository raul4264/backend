const fs = require("fs");

class Contenedor {
  constructor(file){
   
    this.file=file;
    
  }
  save(producto) {
   console.log('save: ',producto)

   fs.promises.readFile(`./${this.file}`,'utf-8')
   .then((producto) => {
     console.log(producto)
   })
   .catch((error)=>{
   console.error(error);
   });

    const productoString= JSON.stringify(producto,null,2);
    console.log(productoString)
    // fs.promises.writeFileSync(`./${this.file}`)
  }

 /*  getById(Number) {}
  getAll() {}
  deleteById(Number) {}
  deleteAll() {}*/
} 



module.exports = Contenedor;
 