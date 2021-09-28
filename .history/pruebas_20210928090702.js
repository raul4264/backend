const express = require("express");
const Contenedor = require("./contenedor");
const contenedor = new Contenedor("./productos.json");
const pruebas = express();
const port = 8080;

const obtenerRandom=(min,max)=>Math.floor(Math.random() * (max-min+1))+min;

pruebas.get("/", function (req, res, next) {
  res.send(
    "<h1 style='color:blue'>Bienvenidos a Pruebas<h1><h2 style='color:green'>Desde metodo: pruebas.get</h2>"
  );
});

pruebas.get("/productos", async (req, res, next) => {
  const productos = await contenedor.getAll();
  res.json(productos);
});

pruebas.get("/productoRandom", async(req, res, next) => {
  const productos=await contenedor.getAll()
  const posicionRandom=obtenerRandom(0,productos.length-1)
  console.log('productos: ',productos[posicionRandom])
  console.log(posicionRandom)
 res.json(productos[posicionRandom])
}); 

pruebas.listen(port, () => {
  console.log(`escuchando en puerto: ${port}...`);
});
