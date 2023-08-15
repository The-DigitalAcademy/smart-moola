import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { AuthGuardService } from '../app/services/auth.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { GetstartedPageComponent } from './components/getstarted-page/getstarted-page.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component'
import { ProfileComponent } from './components/profile/profile.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import { NoDebtScenarioComponent } from './components/scenarios/no-debt/no-debt.component';
import { IndebtedScenarioComponent } from './components/scenarios/indebted/indebted.component';
import { AaComponent } from './components/scenarios/no-debt/aa/aa.component';
import { BaComponent } from './components/scenarios/indebted/ba/ba.component';
import { AnswersComponent } from './components/scenarios/no-debt/answers/answers.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { PasswordUpdateComponent } from './components/password-update/password-update.component';
import { responseComponent } from './components/response/response.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    GetstartedPageComponent,
    PasswordResetComponent,
    NoDebtScenarioComponent,
    IndebtedScenarioComponent,
    ProfileComponent,
    VerifyOtpComponent,
    responseComponent,
    ProfileEditorComponent,
    AnswersComponent,
    PasswordUpdateComponent,
    NavigationMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }
      }
    }),
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule { }
