const prompt = require("prompt-sync")();

class Curso {
  constructor(title, description, dificultad) {
    this._title = title;
    this._description = description;
    this._dificultad = dificultad;

    this._lecciones = [];
    this._direccion={
        calle:null,
        numext:null
    }
  }

  agregarLeccion(leccion) {
    this._lecciones.push(leccion);
  }
  eliminarLeccion() {
    this._lecciones.pop();
  }

  get dificultad() {
    return this._dificultad;
  }

  set dificultad(valor) {
    this._dificultad = valor;
  }
}

function Agregar() {
  let talleres = [];
  let datos;
  let lesi;
  const cursos = new Curso();
  const n = parseInt(prompt("Ingrese la cantidad de cursos: "));

  for (let i = 0; i < n; i++) {
   
    cursos._title = prompt("Nombre del curso: ");
    cursos._description = prompt("Ingrese una descripcion: ");
    cursos._dificultad =parseInt( prompt("Ingrese la dificultad: "));
    let lecciones=parseInt(prompt("Cuantas sesiones desea agregar: "));
    for(let j=0;j<lecciones;j++){
        let curso=cursos.agregarLeccion(prompt("Ingresa el nombre de la sesion: "))
       
        cursos._lecciones.push(curso);
    }
     datos={
        title:cursos._title,
        description:cursos._description,
        dificultad:cursos._dificultad,
        leccion:cursos.agregarLeccion()
    }
    talleres.push(datos);
  }

console.table(talleres);


 
  
}

Agregar();



/* 
const cursoTS = new Curso("Type script", "Curso basico", 2);
const cursoJS = new Curso("Java Script", "Curso intermedio", 3);

cursoJS.agregarLeccion("Introduccion", "Variables", "Metodos");
cursoJS.agregarLeccion("Variables");
cursoJS.agregarLeccion("Metodos");
cursoJS.eliminarLeccion();
cursoJS.dificultad = 5;
cursoTS.agregarLeccion("Operadores");
cursoTS.agregarLeccion("Metodos");
cursoTS.dificultad = 4;

console.log(cursoJS, cursoTS);
 */