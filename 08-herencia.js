//Regla sintáctica de JS

class Persona {
  constructor(
    nombre,
    apellidos,
    edad,
    sexo,
    direccion,
    telefono,
    email,
    horario
  ) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._edad = edad;
    this._sexo = sexo;
    this._direccion = direccion;
    this._telefono = telefono;
    this._email = email;
    this._horario = horario;
  }
}

class Alumno extends Persona {
  constructor(nombre, apellidos, horario, matricula, carrera, semestre) {
    super(nombre, apellidos, horario);
    this._matricula = matricula;
    this._carrera = carrera;
    this._semestre = semestre;
  }

  mensaje() {
    console.log(
      `Soy el alumno ${this._nombre} y estudio la carrera de ${this._carrera}`
    );
  }

  calificacion(cal) {
    this._calificaciones = cal;
  }
}

class Materias extends Alumno{
    constructor(matricula,nombrem){
        super(matricula);
        this._nombrem=nombrem;
        this._agregarMateria=[];
    }

    agregarMateria(materias){
        return this._agregarMateria=materias;
    }
}

class calificacion extends Materias{
    constructor(nombrem,matricula){
        super(matricula,nombrem);
        this._calificacion=[];
    }
}

let alumno1 = new Alumno(
  "Dany",
  "Cambrano",
  "10-16",
  "05E20126",
  "Sistemas",
  "3"
);
alumno1.mensaje();
