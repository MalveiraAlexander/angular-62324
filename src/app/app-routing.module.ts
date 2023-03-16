import { TemplateComponent } from './pages/template/template.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactivoComponent } from './pages/reactivo/reactivo.component';

const routes: Routes = [
  {path: 'reactivo', component: ReactivoComponent},
  {path: 'template', component: TemplateComponent},
  {path: '', redirectTo: 'reactivo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
