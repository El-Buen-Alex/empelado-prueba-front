import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Employee } from "../interfaces/Employee.inertafce";
import { Provincia } from "../interfaces/Provincia.interface";
import { Canton } from "../interfaces/Canton.interface";
import { ObjectBusqueda } from "../interfaces/ObjectBusqueda.interface";
@Injectable()

export class DataService {
    private ruta_server:string='http://127.0.0.1:8000/api';
    constructor(private httpClient: HttpClient) { }
    getEmployees(){
        return this.httpClient.get<Employee[]>('http://127.0.0.1:8000/api/getEmployee');
    }
    getProvincias(){
        return this.httpClient.get<Provincia[]>(this.ruta_server+'/getProvincias');
    }
    getCantonesById(id:number){
        return this.httpClient.get<Canton[]>(this.ruta_server+'/getCantones/'+id);

    }
    SaveEmployee(empleado:Employee){
        return this.httpClient.post(this.ruta_server+'/aggEmployee', empleado)
    }
    DarDeBajaEmpleado(empleado:Employee){
        return this.httpClient.put(this.ruta_server+'/DarBajaEmpleado',empleado);
    }
    getPersonaById(id:number){
        return this.httpClient.get<Employee[]>(this.ruta_server+'/getEmployee/'+id);
        
    }
    getProvinciaByIdCanton(id:number){
        return this.httpClient.get<Provincia[]>(this.ruta_server+'/getProvincia/'+id);

    }
    ActualizarEmpleado(empleado:Employee){
        return this.httpClient.put(this.ruta_server+'/updateEmployee', empleado)
    }
    getEmployeeByNameOrCi(campo:string){
        return this.httpClient.get<Employee[]>(this.ruta_server+'/getEmployeeByNameOrCi/'+campo)
    }
    getEmployeeByNameOrCiAndProvincia(campos:ObjectBusqueda){
        return this.httpClient.get<Employee[]>(this.ruta_server+'/getEmployeeByNameOrCiAndProvincia/'+campos.campo+'/'+campos.provincia_id)
    }
    getEmployeeByNameOrCiAndCanton(campos:ObjectBusqueda){
        return this.httpClient.get<Employee[]>(this.ruta_server+'/getEmployeeByNameOrCiAndCanton/'+campos.campo+'/'+campos.canton_id)

    }
    getEmployeeByCanton_id(campos:ObjectBusqueda){
        return this.httpClient.get<Employee[]>(this.ruta_server+'/getEmployeeByCantonId/'+campos.canton_id)
    }
    getEmployeeByProvincia_id(campos:ObjectBusqueda){
        return this.httpClient.get<Employee[]>(this.ruta_server+'/getEmployeeByProvincia/'+campos.provincia_id)
    }
}