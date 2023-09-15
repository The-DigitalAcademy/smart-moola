import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './Aunthentication/register/register.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Aunthentication/login/login.component';
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
import { AuthGuardService } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'menu', component: NavigationMenuComponent, canActivate: [AuthGuardService] },

  { path: 'resetpassword', component: PasswordResetComponent },
  { path: 'verify-otp', component: VerifyOtpComponent },
  { path: 'password-update', component: PasswordUpdateComponent },

  { path: 'no-debt', component: NoDebtComponent, canActivate: [AuthGuardService]  },
  { path: 'no-debt-user', component: NoDebtUserComponent, canActivate: [AuthGuardService]  },

  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]  },
  { path: 'profile-editor', component: ProfileEditorComponent, canActivate: [AuthGuardService]  },

  { path: 'response', component: responseComponent, canActivate: [AuthGuardService]  },
  { path: 'response-mandla', component: MandlaResponseComponent, canActivate: [AuthGuardService]  },
  { path: 'response-tumi', component: TumiResponseComponent, canActivate: [AuthGuardService]  },

  { path: 'indebted', component: IndebtedUserComponent, canActivate: [AuthGuardService]  },
  { path: 'indebtedscenes', component: IndebtedScenesComponent, canActivate: [AuthGuardService]  },

  { path: 'summary', component: SummaryComponent, canActivate: [AuthGuardService]  },
  { path: 'summary2', component: Summary2Component, canActivate: [AuthGuardService]  },

  { path: 'footer', component: FooterComponent, canActivate: [AuthGuardService]  },

  { path: 'modalresponse', component: ModalContentComponent, canActivate: [AuthGuardService]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
