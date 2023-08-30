import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from '../app/services/auth.guard';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
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
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { Summary2Component } from './components/summary2/summary2.component';
import { NoDebtComponent } from './AI /scenarios/no-debt/no-debt.component';
import { NoDebtUserComponent } from './AI /scenarios/no-debt/no-debt-user/no-debt-user.component';
import { IndebtedScenesComponent } from './AI /scenarios/indebtedscenes/indebtedscene.component';
import { IndebtedUserComponent } from './AI /scenarios/indebted/indebted-user/indebted-user.component';
import { HomeComponent } from './Pages/home/home.component';
import { SummaryComponent } from './components/summary/summary.component';
import { WrongAnswersComponent } from './AI /scenarios/no-debt/wrong-answers/wrong-answers.component';
import { ModalContentComponent } from './components/modal-content/modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    GetstartedPageComponent,
    PasswordResetComponent,
    ProfileComponent,
    VerifyOtpComponent,
    HomeComponent,
    ProfileEditorComponent,
    PasswordUpdateComponent,
    ProfileEditorComponent,
    ProfileEditorComponent,
    responseComponent,
    ProfileEditorComponent,
    ProfileEditorComponent,
    PasswordUpdateComponent,
    NavigationMenuComponent,
    SummaryComponent,
    Summary2Component,
    NoDebtUserComponent,
    IndebtedScenesComponent,
    IndebtedUserComponent,
    ModalContentComponent,
    NoDebtUserComponent,
    NoDebtComponent,
    WrongAnswersComponent,
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
export class AppModule { }
