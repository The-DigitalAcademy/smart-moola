import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from '../app/services/auth.guard';
import { GetstartedPageComponent } from './components/getstarted-page/getstarted-page.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    GetstartedPageComponent,
    PasswordResetComponent,
    VerifyOtpComponent
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
