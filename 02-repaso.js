/*/Realizar un arreglo con dos dimensiones
y guardar dos arreglos internos y dar lectura a los datos
internos*/

let A=[[3,4,5,6],[7,8,9]];

const datosArreglo=()=>{
    A.map((datos)=>{
        datos.map((valores,i)=>{
            console.log(`${i}=${valores}`);
        })
    });
}

//for of
//for in
//for each
//funcion flecha
//while

//Estructura de control parser
let a=4;
let b=5;

function Decision(){

   /*  if(a>b){
        console.log(`La a es mayor ${a}`);
        
    }else{
        console.log(`La b es mayor ${b}`); 
    } */

       const comparar= a>b?"A es mayor":"b es mayor";
       console.log(comparar);
       
}

Decision();
//datosArreglo();
