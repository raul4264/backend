const Contenedor = require("./Contenedor");

const miNuevoContenedor = new Contenedor(`./productos.json`);
console.log(miNuevoContenedor);

const producto = {
  title: "escuadra",
  precio: 123,
};

miNuevoContenedor.save(producto);
