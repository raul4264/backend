const Contenedor = require("./Contenedor");

<<<<<<< HEAD
const miNuevoContenedor = new Contenedor(`./productos.json`);


const producto = {
  title: "cartuchera",
  precio: 44.80,
};

const main = async () => {
  const id = await miNuevoContenedor.save(producto);
  console.log(id)
  const list = await miNuevoContenedor.getAll()
  console.log(list)
 // await miNuevoContenedor.deleteAll()
  
}
=======
const contenedor = new Contenedor(`./productos.json`);

const producto = {
  title: "producto de prueba",
  precio: 200.0,
};

const main = async () => {
  const id = await contenedor.save(producto);
  console.log(id);
  const list = await contenedor.getAll();
  console.log(list);
  // await miNuevoContenedor.deleteAll()
};
>>>>>>> bce617a (quinto commit desafio Servidor con Express.)
main();
