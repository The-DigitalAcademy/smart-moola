import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//import { FormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
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
import { ScenarioAComponent } from './components/scenarios/scenario-a/scenario-a.component';
import { ScenarioBComponent } from './components/scenarios/scenario-b/scenario-b.component';
import { CompNavComponent } from './components/comp-nav/comp-nav.component';



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
