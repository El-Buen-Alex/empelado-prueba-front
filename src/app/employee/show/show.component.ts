import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Canton } from 'src/app/shared/interfaces/Canton.interface';
import { Employee } from 'src/app/shared/interfaces/Employee.inertafce';
import { ObjectBusqueda } from 'src/app/shared/interfaces/ObjectBusqueda.interface';
import { PersonaService } from 'src/app/shared/services/PersonaService.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  EmployeesList:Employee[]=[]
   

  constructor(private PersonaService:PersonaService) { }

  ngOnInit(): void {
    this.getEmpleados()
  }
  getEmpleados(){
    this.PersonaService.cargarEmpleados()
    .subscribe(
      (data:Employee[])=>{
        this.EmployeesList= Object.keys(data).map( (key:any) => data[key] )
      }
    )
  }
  buscarPorNombre(campos:ObjectBusqueda){
    
    if(campos.campo.trim()===''){
      if(campos.canton_id!==0){
        console.log("busqeda por cnaton y prov")
      }else{
        console.log("busqeda por  prov")
        
      }
    }else if(campos.campo.trim()!==''){
      
      if(campos.canton_id!==0){
        console.log("busqeuda triple")
      }else{
        if(campos.provincia_id!==0){
          console.log("busqueda por campo  y prov")
        }else{
          console.log("busqueda solo por cmapo")
        }
      }
    }

    //   this.PersonaService.getEmployeeByNameOrCi(campo).subscribe(
    //     (empleados:Employee[])=>{
    //       this.EmployeesList=Object.keys(empleados).map((key: any) => empleados[key])
    //    }
    //  );
    console.log(campos)
    
  }
  darDeBajaEmpleado(empleado:any, position:number){ 
    if(confirm("¿Seguro que deseas eliminar?")){
      this.PersonaService.DarDeBajaEmpleado(empleado).subscribe(response=>{
        if(response==true){
           this.getEmpleados()
        }
      });
    }
    
  }
 
}
