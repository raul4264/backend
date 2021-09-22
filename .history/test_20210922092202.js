const Contenedor = require("./Contenedor");

const miNuevoContenedor = new Contenedor(`./productos.json`);


const producto = {
  title: "mapa",
  precio: 888.88,
};

const main = async()={
  const id = await miNuevoContenedor.save(producto);
  console.log(id)
}
main();