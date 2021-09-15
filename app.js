//+++++++++++++++++++++++++(Desafio)+++++++++++++++++++++++++++++++++

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

console.log(usJulieta);
console.log(usAndres);

/* 
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
