import { NgModule } from '@angular/core';
import { ProviderRoutingModule } from './provider-routing.module';
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import { DashbordProviderComponent } from './components/dashbord-provider/dashbord-provider.component';
import { RegisterProviderComponent } from './components/register-provider/register-provider.component';



@NgModule({
  declarations: [
    DashbordProviderComponent,
    RegisterProviderComponent
  ],
  imports: [
    ProviderRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class ProviderModule { }
