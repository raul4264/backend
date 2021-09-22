//+++++++++++++++++++++++++(Desafio)+++++++++++++++++++++++++++++++++
const { error } = require("console");
let fs = require("fs");

class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullName() {
    console.log(`Cliente:   ${this.nombre}  ${this.apellido}`);
  }
  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
    console.log(this.mascotas.length);
    return this.mascotas.length;
  }
  agregarLibro(id, nombre) {
    this.libros.push({
      id: id,
      nombre: nombre,
    });
  }
}
/*..........................(Instancia Uno)..................................*/

const usAndres = new Usuario(
  "Andres",
  " Novoa",
  [
    { id: 1, nombre: "La guerra del fin del mundo" },
    { id: 2, nombre: "El amor en los tiempos del colera" },
    { id: 3, nombre: "El Aleph" },
  ],
  ["perro", "caballo", "gato"]
);

/*..........................(Instancia Dos)..................................*/

const usJulieta = new Usuario(
  "Julieta",
  " Gongora",
  [
    { id: 1, nombre: "You don't know JS." },
    { id: 2, nombre: "I understand Javascript" },
    { id: 3, nombre: "The J.S. is great!!!" },
  ],
  ["iguana", "serpiente", "gusano"]
);
/*
console.log(usJulieta);
console.log(usAndres);


console.log(usJulieta);
usJulieta.getFullName();
usJulieta.addMascota("boby");
console.log(usJulieta.mascotas);
console.log(usJulieta);
usJulieta.countMascotas();
let cantidadDeMascotas = usJulieta.countMascotas();
console.log("La cantidad de mascotas es: " + cantidadDeMascotas);
usJulieta.agregarLibro(4, "solarium");
console.log(usJulieta.libros); */

const ejecutora = (call) => {
  setTimeout(() => {
    call();
  }, 4000);
};
const call = () => {
  console.log("hecho");
};
// ejecutora(call);

/*****************************(FS)******************************** */

let textoPlano =
  "Estoy aprendiendo a programar javascript (con Node.js como servidor) con el profe Hernan y con el super tutor Manuel.Javascript es re genial!!!...";

fs.writeFile(
  "javascript.txt",
  textoPlano + "\n",
  { encoding: "utf8" },
  function (error) {
    if (error) {
      console.log(`Error ${error}`);
    } else {
      console.log("La escritura se ha realizado correctamente. ");
    }
  }
);
fs.appendFile(
  "javascript.txt",
  "Agregando texto con metodo appendFile",
  (error) => {
    if (error) {
      console.error("error:" + error);
    }
  }
);
const leer = async () => {
  try {
    await fs.promises.readFile("javascript.txt", console.log("hola"));
  } catch (error) {
    console.error("ERROR:", error);
  }
};
leer();
