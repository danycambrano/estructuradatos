//Definir clases con atributos dentro del constructor

class Persona{
    //Variable estatica: Solo le pertenece a la clase
    #clave;
    #iniciales

    //Metodo constructor
    constructor(nombre, edad, sexo, direccion){
        this._nombre=nombre;
        this._edad=edad;
        this._sexo=sexo;
        this._direccion=direccion;
        this.#clave=12076;
        this.#iniciales="ISC-";
    }
//Metodo saludar
 saludar(){
console.log(`Hola soy ${this._nombre} y mi carrera es ${this._carrera} mi matricula es ${this.generarClave()}`);

    }

    //Metodo para generar una clave de alumno

    generarClave(){
        return this.#iniciales+Math.floor(Math.random()*10*this.#clave)
    }

    //Encapsulamiento setter y getter
     getNombre(){
        return this._nombre
    }

     setNombre(values){
        this._nombre=values;
    }

    getCarrera(){
        return this._carrera;
    }

    setCarrera(valor){
        this._carrera=valor;
    }

}

let persona1=new Persona("Dany",23,"M","Balancan");
persona1.setNombre("Jose");
persona1.setCarrera("Admin")
console.log(persona1);
persona1.saludar();