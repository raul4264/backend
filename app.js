//+++++++++++++++++++++++++(Desafio)+++++++++++++++++++++++++++++++++

const libros = [
  "La guerra del fin del mundo",
  "el aleph",
  "El amor en los tiempos del colera",
];
const mascotas = [{ nombre: "jhonny" }, { raza: "collie" }, { edad: 9 }];

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
  listarMascotas(mascotas) {
    if (false) {
      console.log("vacio");
    } else {
      console.log(mascotas);
    }
  }
  listarLibros(libros) {
    if (false) {
      console.log("vacio");
    } else {
      console.log(libros);
    }
  }
  countLibros(libros) {
    console.log(libros.length);
  }
}
const usAndres = new Usuario("Andres", " Novoa", {}, []);
const usGaby = new Usuario("Gabriela", " Muente", {}, []);
const usTony = new Usuario("Antonio", " Joserme", {}, []);

console.log(usAndres.listarMascotas(mascotas));
console.log(usAndres.listarLibros(libros));

console.log(usAndres);
console.log(usGaby);
console.log(usTony);
console.log(usAndres.getFullName());
console.log(usGaby.getFullName());
console.log(usTony.getFullName());
console.log(usAndres.countLibros(libros));

/*.......................(Practica).......................... */

class Mascota {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  dameNombre() {
    console.log(this.nombre);
    return this.nombre;
  }
  agregarVecino() {
    console.log("estoy en agregar Vecino...");
  }
}
const mascota1 = new Mascota("ana", "gomez");
const mascota2 = new Mascota("rauli", [1, 2, 3, 4]);

mascota1.dameNombre();
mascota2.dameNombre();
mascota2.agregarVecino();
console.log(mascota2.agregarVecino());
function creadoraDeFunciones(par) {
  return function () {
    console.log("fuiCreadaPorMiFuncionCreadora " + par);
  };
}
let ver = creadoraDeFunciones(" soy un argumento..");
console.log(ver());
(function (par) {
  console.log("soy una iife " + par);
})(" hola");
//closure
function gritar(par) {
  const signos = "!!!...";
  return function () {
    console.log(par + signos);
  };
}
let grito = gritar("viva coder");

grito();
//alt + 96=``(templates strings).

(function (par) {
  console.log(par);
})([1, 2, 3]);

function crearMultiplicador(par) {
  return function (num) {
    console.log(par * num);
  };
}
let producto = crearMultiplicador(6);

producto(5);
const frutas = [2, 4, 6, 8];
function listarfrutas(frutas) {
  if (false) {
    console.log("vacio");
  } else {
    console.log(frutas);
  }
}
listarfrutas(frutas);
