import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './employee/show/show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DataService } from './shared/services/DataService.service';
import { PersonaService } from './shared/services/PersonaService.service';
import { HttpClientModule } from '@angular/common/http';
import { AgregarComponent } from './employee/agregar/agregar.component';
import { FormsModule } from '@angular/forms';
import { ProvinciasService } from './shared/services/ProvinciasService.service';
import { CantonesService } from './shared/services/CantonesService.service';
import { HeaderComponent } from './shared/header/header.component';
import { ProvinciaComponent } from './shared/selects/provincia/provincia.component';
import { CantonComponent } from './shared/selects/canton/canton.component';
@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    AgregarComponent,
    HeaderComponent,
    ProvinciaComponent,
    CantonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService, PersonaService, ProvinciasService, CantonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
