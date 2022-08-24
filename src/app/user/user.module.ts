import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {UserRoutingModule} from "./user-routing.module";
import {SharedModule} from "../shared/shared.module";
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    RegisterFormComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
