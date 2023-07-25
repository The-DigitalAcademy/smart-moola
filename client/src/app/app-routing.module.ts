import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { RegisterComponent } from './components/register/register.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
// import { HomeComponent } from './components/home/home.component'; // Replace 'HomeComponent' with the actual component for your homepage


const routes: Routes = [

  {path:'register', component: RegisterComponent},
  {path:'landing', component: LandingPageComponent},
 // {path:'',redirectTo: 'home', pathMatch: 'full'} 
 // { path: 'home', component: HomeComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
