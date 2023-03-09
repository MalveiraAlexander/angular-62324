import { AddRoleComponent } from './add-role/add-role.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'add', component: AddRoleComponent, title: 'Clase 2 - Agregar Rol'},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
