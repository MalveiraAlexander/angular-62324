import { AdminAccessLoadGuard } from './guards/admin-access-load.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RolesComponent } from './pages/roles/roles.component';
import { AdminAccessGuard } from './guards/admin-access.guard';

const routes: Routes = [
  {path: 'users/:id', component: UsuariosComponent, title: 'Clase 2 - Usuarios', data: [{id: 1, name: 'Juan'}, {id: 2, name: 'Pedro'}, {id: 3, name: 'Pablo'}]},
  {path: 'roles', component: RolesComponent, title: 'Clase 2 - Roles', canMatch: [AdminAccessLoadGuard], loadChildren: () => import('./pages/roles/roles.module').then(m => m.RolesModule) },
  {path: '', redirectTo: 'users', pathMatch:'full'},
  {path: '**', component: NotFoundComponent, title: 'Clase 2 - 404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
