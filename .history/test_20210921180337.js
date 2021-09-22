const Contenedor = require(`./productos.json`);

const miNuevoContenedor = new Contenedor('./productos.json');
console.log(miNuevoContenedor)

 const miProducto={
       title:'escuadra',
       precio:123
   };

miNuevoContenedor.save(miProducto); 