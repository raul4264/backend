const { error } = require("console");
const fs = require("fs");

class Contenedor {
  constructor(file) {
    this.file = file;
  }
  async save(producto) {
    console.log("save: ", producto);

    try {
      const contenido = await fs.promises.readFile(`./${this.file}`, "utf-8");

      
      let productos = [];
      if (contenido === "") {
        producto.id = 1;
        productos.push(producto);
      } else {
        const listaDeProductos = JSON.parse(contenido);
        producto.id = listaDeProductos[listaDeProductos.length - 1]. id +1;
        listaDeProductos.push(producto);
        productos = listaDeProductos;
      }

      const productoString = JSON.stringify(productos, null, 2);

      await fs.promises.writeFile(`./${this.file}`, productoString);
      return producto.id;
    } catch (error) {
      console.error(error);
    }
  }
  async getAll() {
    try{
      const contenido = await fs.promises.readFile(`./${this.file}`, "utf-8");
      const listaDeProductos = JSON.parse(contenido);
      return listaDeProductos
    } catch (error) {
        console.error( error);
      }
  
  }
  async deleteAll() {
    try{
    await fs.promises.writeFile(`./${this.file}`,'')
    } catch (error) {
        console.error( error);
      }
  
  }

  async getByid (numero){
    const path =`./${this.file}`;
    try {
      const readJason=JSON.parse(await fs.promises.readFile(path,"utf-8"));
      const objid=readJason.find(({id})=>id===numero;
      if (!objid) return num;
      return objid;
        } catch (error) {
      console.log('error: ',error)
    }

}
 //getById(Number) {}

  


module.exports = Contenedor;
