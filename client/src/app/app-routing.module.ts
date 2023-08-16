import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './Aunthentication/register/register.component'; 
import { LandingPageComponent } from './Pages/landing-page/landing-page.component'; 
import { HomeComponent } from './Pages/home/home.component'; 
import { LoginComponent } from './Aunthentication/login/login.component'; 
import { GetstartedPageComponent } from './Pages/getstarted-page/getstarted-page.component';
import { ProfileComponent } from './Pages/profile/profile.component'; 
import { PasswordResetComponent } from './Aunthentication/password-reset/password-reset.component'; 
import { VerifyOtpComponent } from './Aunthentication/verify-otp/verify-otp.component'; 

import { NoDebtUserComponent } from './AI /scenarios/no-debt/no-debt-user/no-debt-user.component'; 
import { BaComponent } from './AI /scenarios/scenario-b/ba/ba.component'; 
import { ProfileEditorComponent } from './Pages/profile-editor/profile-editor.component';

import { AnswersComponent } from './AI /scenarios/no-debt/answers/answers.component'; 

import { ScenarioBComponent } from './AI /scenarios/scenario-b/scenario-b.component';
import { PasswordUpdateComponent } from './Aunthentication/password-update/password-update.component'; 
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { responseComponent } from './AI /response/response.component'; 



const routes: Routes = [

  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'getstarted', component: GetstartedPageComponent },

  { path: 'resetpassword', component: PasswordResetComponent },
 
  { path: 'profile', component: ProfileComponent },

  { path: 'profile-editor', component: ProfileEditorComponent },
  { path: 'resetpassword', component: PasswordResetComponent },
  { path: 'verify-otp', component: VerifyOtpComponent },
  {path: 'no-debt', component: NoDebtUserComponent},
  
  { path: 'no-debt-user', component: NoDebtUserComponent },
  { path: 'answers', component: AnswersComponent },
 

  { path: 'scenario-b', component: ScenarioBComponent },
  { path: 'ba', component: BaComponent },
  { path: 'password-update', component: PasswordUpdateComponent },
  { path: 'menu', component: NavigationMenuComponent },

  {path: 'response', component: responseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
