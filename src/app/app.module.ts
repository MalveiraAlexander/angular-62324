import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RolesComponent } from './pages/roles/roles.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddRoleComponent } from './pages/roles/add-role/add-role.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    RolesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
