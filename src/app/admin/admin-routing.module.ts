import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RegisterProviderComponent} from "../provider/components/register-provider/register-provider.component";
import {DashbordProviderComponent} from "../provider/components/dashbord-provider/dashbord-provider.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";

const routes: Routes = [

  { path: '', component: DashboardComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
