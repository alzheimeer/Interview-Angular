import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { EdicionComponent } from './pages/edicion/edicion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FilterforamountPipe } from './pipes/filterforamount.pipe';
import { ControlempleadoComponent } from './pages/controlempleado/controlempleado.component';


@NgModule({
  declarations: [
    LandingComponent,
    ConsultaComponent,
    EdicionComponent,
    RegistroComponent,
    NavbarComponent,
    FilterforamountPipe,
    ControlempleadoComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LandingModule { }
