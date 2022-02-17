import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataService } from "./DataService.service";
import { Employee } from "../interfaces/Employee.inertafce";
import { BehaviorSubject } from "rxjs";

@Injectable()

export class PersonaService{
  
    employees:Employee[]=[]
    constructor(private httpClient:HttpClient,
        private DataService: DataService){
               
        }

     cargarEmpleados(){
       return this.DataService.getEmployees();
    }
    saveEmpleado(empleado:Employee){
        return this.DataService.SaveEmployee(empleado)
    }
    DarDeBajaEmpleado(empleado:Employee){
        return this.DataService.DarDeBajaEmpleado(empleado)
    }
    getPersonaById(id:number){
        return this.DataService.getPersonaById(id)
    }
    ActualizarEmpleado(empleado:Employee){
        return this.DataService.ActualizarEmpleado(empleado);
    }
    getEmployeeByNameOrCi(campo:string){
        return this.DataService.getEmployeeByNameOrCi(campo)
    }
}