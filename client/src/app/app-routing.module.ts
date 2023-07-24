import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { RegisterComponent } from './components/register/register.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [

  {path:'register', component: RegisterComponent},
  {path:'',redirectTo: 'home', pathMatch: 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
