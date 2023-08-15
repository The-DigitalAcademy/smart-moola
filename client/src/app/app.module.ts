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
import { CompNavComponent } from './components/comp-nav/comp-nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import { ScenarioAComponent } from './components/scenarios/scenario-a/scenario-a.component';
import { ScenarioBComponent } from './components/scenarios/scenario-b/scenario-b.component';
import { AnswersComponent } from './components/scenarios/scenario-a/answers/answers.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { PasswordUpdateComponent } from './components/password-update/password-update.component';
import { responseComponent } from './components/response/response.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { NgxUiLoaderModule } from "ngx-ui-loader";

import { AaComponent } from './components/scenarios/scenario-a/aa/aa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    GetstartedPageComponent,
    PasswordResetComponent,
    ScenarioAComponent,
    ScenarioBComponent,
    CompNavComponent,
    ProfileComponent,
    VerifyOtpComponent,

    AaComponent,

  
    ProfileEditorComponent,
    AnswersComponent,
     PasswordUpdateComponent,


    AnswersComponent,
    AaComponent,
  
    ProfileEditorComponent,
    AnswersComponent,
    ProfileEditorComponent,
    AnswersComponent,

    QuestionsComponent,
    ProfileEditorComponent,
    AnswersComponent,
    ProfileEditorComponent,
    CorrectAnswersComponent,

    PasswordUpdateComponent,

    responseComponent,
    NavigationMenuComponent,
    
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
