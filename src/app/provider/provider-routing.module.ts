import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PaypalPaymentComponent} from "../user/components/paypal-payment/paypal-payment.component";
import {ReservationListClientComponent} from "../user/components/reservation-list-client/reservation-list-client.component";
import {HomeComponent} from "../core/components/home/home.component";
import {RegisterFormComponent} from "../core/components/register-form/register-form.component";
import {ProviderServiceComponent} from "../user/components/provider-service/provider-service.component";
import {AllServicesListComponent} from "../core/components/all-services-list/all-services-list.component";
import {DashbordProviderComponent} from "./components/dashbord-provider/dashbord-provider.component";
import {RegisterProviderComponent} from "../core/components/register-provider/register-provider.component";

const routes: Routes = [

  // { path: 'register', component: RegisterProviderComponent},
  { path: '', component: DashbordProviderComponent}


];


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProviderRoutingModule { }
