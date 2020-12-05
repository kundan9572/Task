import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailsService } from '../app/details.service';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { Observable } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PromiseComponent } from './promise/promise.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DetailsComponent,
    PromiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
