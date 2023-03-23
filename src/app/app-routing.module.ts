import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InyeccionDosComponent } from './components/inyeccion-dos/inyeccion-dos.component';
import { InyeccionComponent } from './components/inyeccion/inyeccion.component';

const routes: Routes = [
  {path: 'inyeccion', component: InyeccionComponent},
  {path: 'inyeccion-dos', component: InyeccionDosComponent},
  {path: '', redirectTo: 'inyeccion', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
