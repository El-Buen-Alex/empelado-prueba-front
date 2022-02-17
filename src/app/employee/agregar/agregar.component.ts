import { Component, OnInit } from '@angular/core';
import { Canton } from 'src/app/shared/interfaces/Canton.interface';
import { Provincia } from 'src/app/shared/interfaces/Provincia.interface';
import { CantonesService } from 'src/app/shared/services/CantonesService.service';
import { ProvinciasService } from 'src/app/shared/services/ProvinciasService.service';
import { Employee } from 'src/app/shared/interfaces/Employee.inertafce';
import { PersonaService } from 'src/app/shared/services/PersonaService.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  provincia_id: number = 0//

  provincias: Provincia[] = []
  cantones: Canton[] = []

  id_editar?: number;
  empleado = {
    name: '',
    cedula: '',
    canton_id: 0,
    id:0,
    state:''
  }

  constructor(private ProvinciasSVC: ProvinciasService,
    private CantonesSVC: CantonesService,
    private PersonaSVC: PersonaService,
    private router: Router,
    private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.ProvinciasSVC.getProvincias().subscribe(
      (provincias: Provincia[]) => {
        this.provincias = Object.keys(provincias).map((key: any) => provincias[key])
      }
    )
    this.comprobarEdicion()
  }
  comprobarEdicion() {
    this.id_editar = this.rutaActiva.snapshot.params['id']
    if (this.id_editar) {
      this.PersonaSVC.getPersonaById(this.id_editar).subscribe(
        (empleado: Employee[]) => {
          console.log(empleado[0])
          this.empleado = empleado[0];
          this.CantonesSVC.getProvinciaByIdCanton(this.empleado.canton_id).subscribe(
            (response: Provincia[]) => {
              this.provincia_id = response[0].id
              this.refreshCanton()
            }
          )

        }
      )
    }
  }
  refreshCanton() {//
    if (this.provincia_id !== 0) {
      this.CantonesSVC.getCantonesById(this.provincia_id).subscribe(
        (cantones: Canton[]) => {
          this.cantones = Object.keys(cantones).map((key: any) => cantones[key])
        }
      )
    }
  }
  onGuardarEmpleado() {

    if (this.id_editar) {
      this.empleado.id=this.id_editar;

      this.PersonaSVC.ActualizarEmpleado(this.empleado).subscribe(
        response=>{
           if(response==true){
            this.router.navigate([''])
           }
         
        }
      )
    } else {
      const employee: Employee = {id:0, 'name': this.empleado.name, 'canton_id': this.empleado.canton_id, 'cedula': this.empleado.cedula, 'state': 'A' }
      this.PersonaSVC.saveEmpleado(employee).subscribe(
        (response) => {
          if (response == true) {
            this.router.navigate([''])
          }
        }
      )
    }

  }


}
