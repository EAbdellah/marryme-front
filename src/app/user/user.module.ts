import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {UserRoutingModule} from "./user-routing.module";
import {SharedModule} from "../shared/shared.module";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    RegisterFormComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
