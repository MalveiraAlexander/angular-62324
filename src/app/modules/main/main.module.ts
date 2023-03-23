import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { MarvelService } from './services/marvel.service';
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    MarvelService
  ],
})
export class MainModule { }
