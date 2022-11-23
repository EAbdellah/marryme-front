import {RouterModule, Routes} from "@angular/router";
import {RegisterFormComponent} from "../core/components/register-form/register-form.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "../core/components/login/login.component";
import {HomeComponent} from "../core/components/home/home.component";
import {AllServicesListComponent} from "../core/components/all-services-list/all-services-list.component";
import {ProviderServiceComponent} from "./components/provider-service/provider-service.component";
import {ReservationListClientComponent} from "./components/reservation-list-client/reservation-list-client.component";
import {PaypalPaymentComponent} from "./components/paypal-payment/paypal-payment.component";

const routes: Routes = [
  { path: 'payment', component: PaypalPaymentComponent},
  { path: 'reservations', component: ReservationListClientComponent},
  {path:':id', component: ProviderServiceComponent},
  { path: '', component: AllServicesListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule{}
