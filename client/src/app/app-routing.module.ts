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

import { ProfileEditorComponent } from './Pages/profile-editor/profile-editor.component'; 
import { PasswordUpdateComponent } from './Aunthentication/password-update/password-update.component'; 
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { responseComponent } from './components/response/response.component';
import { ModalComponent } from './components/modal/modal.component';
import { NoDebtComponent } from './components/scenarios/no-debt/no-debt.component';
import { NoDebtUserComponent } from './components/scenarios/no-debt/no-debt-user/no-debt-user.component';

const routes: Routes = [

  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'getstarted', component: GetstartedPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },

  { path: 'resetpassword', component: PasswordResetComponent },

  { path: 'no-debt', component: NoDebtComponent },
  { path: 'no-debt-user', component: NoDebtUserComponent },

  { path: 'profile', component: ProfileComponent },
  { path: 'profile-editor', component: ProfileEditorComponent },

  { path: 'verify-otp', component: VerifyOtpComponent },

  { path: 'answers', component: AnswersComponent },


  { path: 'password-update', component: PasswordUpdateComponent },
  { path: 'menu', component: NavigationMenuComponent },

  { path: 'response', component: responseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
