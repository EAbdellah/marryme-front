import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {UserRoutingModule} from "./user-routing.module";
import {SharedModule} from "../shared/shared.module";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AllServicesListComponent } from './components/all-services-list/all-services-list.component';
import { ProviderServiceComponent } from './components/provider-service/provider-service.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    RegisterFormComponent,
    LoginComponent,
    HomeComponent,
    AllServicesListComponent,
    ProviderServiceComponent,

  ],
  imports: [
    UserRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class UserModule { }
