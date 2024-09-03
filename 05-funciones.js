//Factory function 
/* const Persona={
    nombre:"Dany",
    edad:23
}
const Persona2={
    nombre:"Jose",
    edad:25
} */

function datosPersona(nombre,edad){
    return{
        nombre,
        edad,

        active:true
    }
}

let persona1=datosPersona("dany",24);
let persona2=datosPersona("Juan",25);
//console.log(persona1,persona2);
//camel case
const datosUsuario={
    nombre:"dany",
    edad:23,
    password:"1234455",
    direccion:{
        colonia:"EL carmen",
        calle:"Principal",
        numext:123
    },
    sueldo:234.24,
     guardarUsuario:function(){
console.log("Guardar usuario....");

    }
}

//datosUsuario.guardarUsuario();

//Add registros y parámetros a los objetos definidos
const user={id:1};
user.nombre="Dany";
user.guardarUser=function(){
    console.log("GUardando user...");
}
/* console.log(user);
user.guardarUser(); */

//objetos definidos
//const Person=Object.freeze({id:1,nombre:"Dany"});
const Person=Object.seal({id:1,nombre:"Dany"})
Person.id=2;
Person.nombre="Juan"
Person.edad=23;

//console.log(Person);
//Pasar funciones como parámetros
function Pitbull(nombre){
this._nombre=nombre;
}

function Animal(Fn,argumento){
    return new Fn(argumento)
}

let animal1=Animal(Pitbull,"Fidudays")
console.log(animal1);

