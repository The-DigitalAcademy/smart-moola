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
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
// import { AnswersComponent } from './components/scenarios/scenario-a/answers/answers.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { PasswordUpdateComponent } from './components/password-update/password-update.component';
import { responseComponent } from './components/response/response.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

import { NoDebtComponent } from './components/scenarios/no-debt/no-debt.component';
import { SummaryComponent } from './components/summary/summary.component';

import { FooterComponent } from './components/footer/footer.component';
// import { IndebtedScenariosComponent } from './components/scenarios/indebted/indebted.component';
import { indebtedScenesComponent } from './components/scenarios/indebted-scenes/indebted-scenes.component';
import { IndebtedUserComponent } from './components/scenarios/indebted/indebted-user/indebted-user.component';
import { Summary2Component } from './components/summary2/summary2.component';


// import { NoDebtUserScenarioComponent } from './components/scenarios/no-debt/no-debt.component';

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
    // NoDebtScenarioComponent,

    // NoDebtUserScenarioComponent,
    // IndebtedScenariosComponent,
    ProfileComponent,
    VerifyOtpComponent,
    // AaComponent,
    ProfileEditorComponent,
    // AnswersComponent,
    PasswordUpdateComponent,
    ProfileEditorComponent,
    ProfileEditorComponent,
    responseComponent,
    ProfileEditorComponent,
    ProfileEditorComponent,
    PasswordUpdateComponent,
    responseComponent,
    NavigationMenuComponent,
    SummaryComponent,

    FooterComponent,
    indebtedScenesComponent,
    IndebtedUserComponent,
    Summary2Component
    
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
        },
      },
    }),
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
