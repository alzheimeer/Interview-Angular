import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { ControlempleadoComponent } from './pages/controlempleado/controlempleado.component';
import { EdicionComponent } from './pages/edicion/edicion.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'consulta', component: ConsultaComponent },
      { path: 'edicion', component: EdicionComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'control', component: ControlempleadoComponent },
      { path: '**', redirectTo: 'consulta' },
    ],
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
