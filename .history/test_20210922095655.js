const Contenedor = require("./Contenedor");

const miNuevoContenedor = new Contenedor(`./productos.json`);


const producto = {
  title: "regla",
  precio: 77.00,
};

const main = async () => {
  const id = await miNuevoContenedor.save(producto);
  console.log(id)
  const list = await miNuevoContenedor.getAll()
  console.log(list)
}
main();
