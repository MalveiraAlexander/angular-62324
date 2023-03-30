import { AuthComponent } from './modules/auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/main.component';
import { NotAuthGuard } from './guards/not-auth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule), component: AuthComponent, canLoad: [NotAuthGuard]},
  {path: 'main', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule), component: MainComponent, canLoad: [AuthGuard]},
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
