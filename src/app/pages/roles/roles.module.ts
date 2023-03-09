import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRoleComponent } from './add-role/add-role.component';
import { RolesRoutingModule } from './roles-routing.module';



@NgModule({
  declarations: [
    AddRoleComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule
  ]
})
export class RolesModule { }
