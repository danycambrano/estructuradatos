const prompt = require("prompt-sync")();

/* let numero1;
let numero2;

numero1=parseInt(prompt("Ingrese el nuumero 1: "));
numero2=parseInt(prompt("Ingresa el valor 2: "));


console.log(numero1*numero2);
 */

/* Realizar un programa que contenga un arreglo indefinido,
en el que solicite a través de teclado el tamaño y 
se ingrese por lo menos 4 valores de cualquier tipo,
urtilizando un ciclo para ingresar los datos
imprimir los valores en pantalla. */

let arreglo = [];
/* 
function infoArreglo(){
    const dimension=parseInt(prompt('Ingresa el tamanio del arreglo: '));
    for(let i=0; i<dimension;i++){
        let datos=prompt("Ingresa los datos: ")
        //arreglo[i]=datos;
        arreglo.push(datos);
    }
    //console.log(arreglo);
    
    arreglo.map((data)=>{
        console.log(data);
        
    })
    
} */

//infoArreglo();

let informacion;
const datos = () => {
  const dimension = parseInt(prompt("Ingresa el tamanio del arreglo: "));
  for (let i = 0; i < dimension; i++) {
    let nombre = prompt("Ingresa el nombre: ");
    let edad = parseInt(prompt("Ingresa el nombre: "));
    informacion = {
      nombre,
      edad,
    };
    arreglo.push(informacion);
  }

  arreglo.map((precioso) => {
    console.log(
      `El nombre es ${precioso.nombre} y tiene ${precioso.edad} años`
    );
  });

  console.log(arreglo);
};
datos();
