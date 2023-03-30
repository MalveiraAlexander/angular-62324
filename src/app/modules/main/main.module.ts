import { UserService } from './services/user.service';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { MarvelService } from './services/marvel.service';
import { HttpClientModule } from "@angular/common/http";
import { UsersComponent } from './pages/users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RefreshService } from './services/refresh.service';



@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    MarvelService,
    UserService,
    RefreshService
  ],
})
export class MainModule { }
