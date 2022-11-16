import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {ProviderRoutingModule} from "../provider/provider-routing.module";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {AdminRoutingModule} from "./admin-routing.module";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    AdminRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class AdminModule { }
