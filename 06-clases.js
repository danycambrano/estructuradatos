//Definir clases con atributos dentro del constructor

class Persona{
    constructor(nombre, edad, sexo, direccion){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
        this.direccion=direccion;
    }
//Metodo saludar
 saludar(){
console.log(`Hola ${this.nombre}`);

    }
}

let persona1=new Persona("Dany",23,"M","Balancan");
persona1.nombre="Juan"
console.log(persona1);
persona1.saludar();