/* let nombre="Dany";
var apellidos="Cambrano";
const edad=30,"dany";

//edad=25;
nombre="Jose"
console.log(`Mi nombre es ${nombre} ${apellidos} y tengo ${edad}`);
 */
let datos1=new Array();
let paises={};
let datos=["Dany",12,["cambrano"],{nombre:"Jose",edad:20}];
let nombre=[];

//console.log(datos);

//tipos de datos
//Primitivos
Number
String
Date
Boolean

//Compuestos
/* Object
Array
function */


//funciones
function Suma(a,b){
    return console.log(a+b);
}

function Resta(){
    let a=5;
    let b=3;
   return console.log(a-b);

}

//Funcion anonima
const Producto=function(a,b){
return console.log(a*b);

}

//Funcion flecha o Arrow function
const Residuo=(a,b)=>{
    return console.log(a%b);
     
}
Suma(3,4);
Resta();
Producto(3,4);
Residuo(10,3)

///Estamos trabajando con git

function Git(){
    console.log("Ejemoplo de git");
    
}