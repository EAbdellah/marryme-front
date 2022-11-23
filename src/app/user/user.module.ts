import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from '../core/components/register-form/register-form.component';
import {UserRoutingModule} from "./user-routing.module";
import {SharedModule} from "../shared/shared.module";
import { LoginComponent } from '../core/components/login/login.component';
import { HomeComponent } from '../core/components/home/home.component';
import { AllServicesListComponent } from '../core/components/all-services-list/all-services-list.component';
import { ProviderServiceComponent } from './components/provider-service/provider-service.component';
import {FormsModule} from "@angular/forms";
import { ReservationListClientComponent } from './components/reservation-list-client/reservation-list-client.component';
import { PaypalPaymentComponent } from './components/paypal-payment/paypal-payment.component';



@NgModule({
  declarations: [
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
