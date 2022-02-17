import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Canton } from '../interfaces/Canton.interface';
import { Employee } from '../interfaces/Employee.inertafce';
import { ObjectBusqueda } from '../interfaces/ObjectBusqueda.interface';
import { Provincia } from '../interfaces/Provincia.interface';
import { CantonesService } from '../services/CantonesService.service';
import { PersonaService } from '../services/PersonaService.service';
import { ProvinciasService } from '../services/ProvinciasService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  provincia_id:number=0
  campo:string=''
  canton_id:number=0;

  provincias:Provincia[]=[]
  cantones:Canton[]=[]
  empleados:Employee[]=[]

  @Output() buscar = new EventEmitter();

  constructor(private ProvinciasSVC: ProvinciasService,
    private CantonesSVC: CantonesService,
    private personaSVC:PersonaService) { }

  ngOnInit(): void {
    this.ProvinciasSVC.getProvincias().subscribe(
      (provincias: Provincia[]) => {
        this.provincias = Object.keys(provincias).map((key: any) => provincias[key])
      }
    )
  }
  relizarBusqueda(){
    const  object_busqueda:ObjectBusqueda={
      campo:'',
      provincia_id:0,
      canton_id:0
    }
    
    if(this.campo.trim()!=""){
      object_busqueda.campo=this.campo

    }
    if(this.provincia_id!=0){
      object_busqueda.provincia_id=+this.provincia_id
      object_busqueda.canton_id=+this.canton_id

    }
    this.buscar.emit(object_busqueda)
    
  }
  refreshCanton(provincia_id:number) {//
    if (provincia_id !== 0) {
      this.provincia_id=provincia_id;
      this.CantonesSVC.getCantonesById(this.provincia_id).subscribe(
        (cantones: Canton[]) => {
          this.cantones = Object.keys(cantones).map((key: any) => cantones[key])
        }
      )
    }
  }
  setIdCanton(id:number){
      this.canton_id=id;
      console.log(id)
  }
}
