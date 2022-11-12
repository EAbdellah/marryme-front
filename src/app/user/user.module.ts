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
import { ReservationListClientComponent } from './components/reservation-list-client/reservation-list-client.component';
import { PaypalPaymentComponent } from './components/paypal-payment/paypal-payment.component';



@NgModule({
  declarations: [
    RegisterFormComponent,
    LoginComponent,
    HomeComponent,
    AllServicesListComponent,
    ProviderServiceComponent,
    ReservationListClientComponent,
    PaypalPaymentComponent,

  ],
  imports: [
    UserRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class UserModule { }
