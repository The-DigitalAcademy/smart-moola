import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './Aunthentication/register/register.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Aunthentication/login/login.component';
import { GetstartedPageComponent } from './Pages/getstarted-page/getstarted-page.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { PasswordResetComponent } from './Aunthentication/password-reset/password-reset.component';
import { VerifyOtpComponent } from './Aunthentication/verify-otp/verify-otp.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileEditorComponent } from './Pages/profile-editor/profile-editor.component';
import { PasswordUpdateComponent } from './Aunthentication/password-update/password-update.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { responseComponent } from './AI /response/response.component';
import { ModalComponent } from './components/modal/modal.component';
import { NoDebtComponent } from './AI /scenarios/no-debt/no-debt.component';
import { NoDebtUserComponent } from './AI /scenarios/no-debt/no-debt-user/no-debt-user.component';
import { IndebtedUserComponent } from './AI /scenarios/indebted/indebted-user/indebted-user.component';
import { MandlaResponseComponent } from './AI /scenarios/no-debt/response-mandla/response-mandla.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TumiResponseComponent } from './AI /scenarios/no-debt/response-tumi/response-tumi.component';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { IndebtedScenesComponent } from './AI /scenarios/indebtedscenes/indebtedscene.component';
import { Summary2Component } from './components/summary2/summary2.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'getstarted', component: GetstartedPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent },
  { path: 'menu', component: NavigationMenuComponent },

  { path: 'resetpassword', component: PasswordResetComponent },
  { path: 'verify-otp', component: VerifyOtpComponent },
  { path: 'password-update', component: PasswordUpdateComponent },

  { path: 'no-debt', component: NoDebtComponent },
  { path: 'no-debt-user', component: NoDebtUserComponent },

  { path: 'profile', component: ProfileComponent },
  { path: 'profile-editor', component: ProfileEditorComponent },

  { path: 'response', component: responseComponent },
  { path: 'response-mandla', component: MandlaResponseComponent },
  { path: 'response-tumi', component: TumiResponseComponent },

  { path: 'indebted', component: IndebtedUserComponent },
  { path: 'indebtedscenes', component: IndebtedScenesComponent },

  { path: 'summary', component: SummaryComponent },
  { path: 'summary2', component: Summary2Component },

  { path: 'footer', component: FooterComponent },

  { path: 'modalresponse', component: ModalContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
