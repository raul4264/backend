const Contenedor = require("./Contenedor");

const miNuevoContenedor = new Contenedor(`./productos.json`);


const producto = {
  title: "mapa",
  precio: 888.88,
};
constmain = async()={
  const id = miNuevoContenedor.save(producto);
  console.log(id)
}
