//Crear una lista con diferentes tipos de datos
let datos = [
  {
    nombre: "Dany",
    apellido: "Cambrano",
    edad: 35,
    estudiante: false,
  },
  {
    nombre: "Axl",
    apellido: "Gamas",
    edad: 15,
    estudiante: true,
  },
];
//let arreglo = ["Dany", 34, true];

const info = () => {
  /* for(let arr in arreglo){
        console.log(arreglo[arr]);  
    } */
  /*   for (let lis in datos){
            console.log(`${lis}:${datos[lis]}`);
            
        } */

  /*   let valores = Object.values(datos);

  valores.map((data,index) => {
    console.log(`${data}`);
  }); */

  /* let valores = Object.keys(datos);
  for (let informacion of valores) {
    console.log(informacion);
  } */

  /* let valores=Object.entries(datos);
    valores.map(dat=>{
        console.log(dat);
        
    }) */

  /*  Object.entries(datos).forEach(([key,value])=>{
            console.log(` ${key}: ${value}`);
            
        }); */

  datos.map((data) => {
    console.log(
      `El nombre es: ${data.nombre} ${data.apellido} y tiene ${data.edad} años`
    );
  });
};
info();

//Dany
