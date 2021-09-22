const Contenedor = require("./Contenedor");

const miContenedor = new Contenedor("productos.json");
console.log(miContenedor)

 const miProducto={
       title:'escuadra',
       precio:123
   };

miContenedor.save(miProducto); 