import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './employee/agregar/agregar.component';
import { ShowComponent } from './employee/show/show.component';

const routes: Routes = [
  {
    path:'',
    component:ShowComponent
  },
  {
    path:'empleado/agregar',
    component: AgregarComponent
  },
  {
    path:'empleado/edit/:id',
    component:AgregarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
