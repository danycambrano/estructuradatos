//Evaluación tema 1
const prompt = require("prompt-sync")();
const porc = 0.15;
class Cooperativa {
  constructor(nombre, apellidos, rfc, direccion, telefono, hrstra, cosxhra) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._rfc = rfc;
    this._direccion = direccion;
    this._telefono = telefono;
    this._cosxhra = cosxhra;
    this._hrstra = hrstra;
    this._agregarEm = [];
    this._sueldo = 0;
  }
  //getter
  //setter
  agregarEmp() {
    let tam = parseInt(prompt("Cantidad de empleados a dar de alta: "));
    for (let i = 0; i < tam; i++) {
      this._nombre = prompt("Ingresa el nombre del empleado: ");
      this._hrstra = parseInt(prompt("Numero de horas trabajadas: "));
      this._cosxhra = parseFloat(prompt("Ingrese el costo por hora: "));
      let empleado = {
        nombre: this._nombre,
        horastra: this._hrstra,
        cosxhra: this._cosxhra,
        sueldo: this.calcularSueldo(),
      };
      this._agregarEm.push(empleado);
    }
  }

  eliminarEmp() {
    this._agregarEm.length > 0
      ?  console.log("Se ha eliminado el ultimo empleado:", this._agregarEm.pop())
      
      : console.log("No ha registro que eliminar");

      this.mostrarEmpleados();
  }

  calcularSueldo() {
    if (this._hrstra > 8) {
      this._sueldo = this._cosxhra * this._hrstra;
      return (this._sueldo =
        this._sueldo + this._cosxhra * porc * (this._hrstra - 8));
    } else {
      return (this._sueldo = this._cosxhra * this._hrstra);
    }
  }

  mostrarEmpleados() {
   this._agregarEm.length>0
      ? this._agregarEm.map((emp) => {
          console.log(
            `El nombre es ${emp.nombre} y tiene un sueldo ${emp.sueldo}`
          );
        }):console.log("No hay datos que mostrar");
        
      
  }


   menuLista(){
let listar=parseInt(prompt("Que desea Hacer: 1. Agregar, 2. Mostrar, 3. Eliminar, 4. Salir: "));
while(listar!=4){
    switch(listar){
        case 1:
            this.agregarEmp();
            break;
        case 2:
            this.mostrarEmpleados()
            break;
        case 3:
            this.eliminarEmp();
            break;
        case 4:
            break;
    }
     listar=parseInt(prompt("Que desea Hacer: 1. Agregar, 2. Mostrar, 3. Eliminar, 4. Salir: "));
}
  } 
}



let empleados=new Cooperativa();
/* empleados.agregarEmp();
empleados.mostrarEmpleados();
empleados.eliminarEmp(); */
empleados.menuLista();