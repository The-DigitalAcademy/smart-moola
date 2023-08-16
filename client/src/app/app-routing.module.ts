import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { GetstartedPageComponent } from './components/getstarted-page/getstarted-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';

import { IndebtedScenariosComponent } from './components/scenarios/indebted/indebted.component';
import { IndebtedUserComponent } from './components/scenarios/indebted/indebted-user/indebted-user.component';

import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';

// import { AnswersComponent } from './components/scenarios/scenario-a/answers/answers.component';

import { PasswordUpdateComponent } from './components/password-update/password-update.component';
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

  // { path: 'answers', component: AnswersComponent },

  { path: 'indebted', component: IndebtedScenariosComponent },
  { path: 'indebted-user', component: IndebtedUserComponent },
  { path: 'password-update', component: PasswordUpdateComponent },
  { path: 'menu', component: NavigationMenuComponent },

  { path: 'response', component: responseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
