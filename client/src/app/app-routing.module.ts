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
import { responseComponent } from './AI /response/response.component'; 
import { ModalComponent } from './components/modal/modal.component';
import { NoDebtComponent } from './AI /scenarios/no-debt/no-debt.component'; 
import { NoDebtUserComponent } from './AI /scenarios/no-debt/no-debt-user/no-debt-user.component'; 
import { FooterComponent } from './components/footer/footer.component';
import { indebtedScenesComponent } from './AI /scenarios/indebted-scenes/indebted-scenes.component'; 
import { IndebtedUserComponent } from './AI /scenarios/indebted/indebted-user/indebted-user.component'; 
import { AnswersComponent } from './AI /scenarios/no-debt/answers/answers.component';
import { SummaryComponent } from './components/summary/summary.component';

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

  { path: 'indebted', component: IndebtedUserComponent },
  { path: 'password-update', component: PasswordUpdateComponent },
  { path: 'menu', component: NavigationMenuComponent },
  { path: 'summary', component: SummaryComponent},

  { path: 'response', component: responseComponent },
  { path: 'footer', component: FooterComponent},
  { path: 'indebtedscene', component: indebtedScenesComponent},
  { path: 'summary', component: SummaryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
