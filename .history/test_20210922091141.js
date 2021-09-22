const Contenedor = require("./Contenedor");

const miNuevoContenedor = new Contenedor(`./productos.json`);
console.log(miNuevoContenedor);

const producto = {
  title: "lkjlj",
  precio: 123,
};

 const id = miNuevoContenedor.save(producto);
console.log(id)