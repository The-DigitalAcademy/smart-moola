import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { GetstartedPageComponent } from './components/getstarted-page/getstarted-page.component';

import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';

import { ScenarioAComponent } from './components/scenarios/scenario-a/scenario-a.component';
import { AaComponent } from './components/scenarios/scenario-a/aa/aa.component';
import { BaComponent } from './components/scenarios/scenario-b/ba/ba.component';

const routes: Routes = [

  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'getstarted', component: GetstartedPageComponent },
  { path: 'resetpassword', component: PasswordResetComponent },
  { path: 'verify-otp', component: VerifyOtpComponent }
  { path: 'scenario-a', component: ScenarioAComponent },
  { path: 'aa', component: AaComponent },
  { path: 'ba', component: BaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
