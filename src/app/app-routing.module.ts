import { AuthComponent } from './modules/auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/main.component';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule), component: AuthComponent},
  {path: 'main', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule), component: MainComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
