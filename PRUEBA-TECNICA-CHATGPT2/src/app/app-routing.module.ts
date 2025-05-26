import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: 'registro', component: RegisterComponent
  },
  {
    path: 'confirmation', 
    loadComponent: () => import('@shared/confirmation/confirmation.component').then((c) => c.ConfirmationComponent)
  },
  {
    path: '', redirectTo: '/registro', pathMatch: "full" 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
