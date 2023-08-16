import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { AuthGuardService } from '../app/services/auth.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Aunthentication/login/login.component'; 
import { RegisterComponent } from './Aunthentication/register/register.component'; 
import { LandingPageComponent } from './Pages/landing-page/landing-page.component'; 
import { GetstartedPageComponent } from './Pages/getstarted-page/getstarted-page.component'; 
import { PasswordResetComponent } from './Aunthentication/password-reset/password-reset.component'; 
import { ProfileComponent } from './Pages/profile/profile.component'; 
import { VerifyOtpComponent } from './Aunthentication/verify-otp/verify-otp.component'; 
import { ProfileEditorComponent } from './Pages/profile-editor/profile-editor.component'; 
import { PasswordUpdateComponent } from './Aunthentication/password-update/password-update.component'; 
import { responseComponent } from './AI /response/response.component'; 
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { NoDebtComponent } from './AI /scenarios/no-debt/no-debt.component';



// import { AaComponent } from './components/scenarios/scenario-a/aa/aa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    GetstartedPageComponent,
    PasswordResetComponent,

    NoDebtComponent,
    ProfileComponent,
    VerifyOtpComponent,
  
    ProfileEditorComponent,
    PasswordUpdateComponent,
    ProfileEditorComponent,
    ProfileEditorComponent,
    responseComponent,
    ProfileEditorComponent,
    ProfileEditorComponent,
    PasswordUpdateComponent,
    responseComponent,
    NavigationMenuComponent

  ],
  imports: [
    NgxUiLoaderModule,
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
