const Contenedor = require("./Contenedor");

const miNuevoContenedor = new Contenedor(`./productos.json`);


const producto = {
  title: "lkjlj",
  precio: 123,
};

 const id = miNuevoContenedor.save(producto);
console.log(id)