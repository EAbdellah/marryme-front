import {RouterModule, Routes} from "@angular/router";
import {RegisterFormComponent} from "./components/register-form/register-form.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {AllServicesListComponent} from "./components/all-services-list/all-services-list.component";
import {ProviderServiceComponent} from "./components/provider-service/provider-service.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'marryme', component: HomeComponent},
  {path: 'register', component: RegisterFormComponent },
  {path:':id', component: ProviderServiceComponent},
  { path: '', component: AllServicesListComponent}

  // { path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule{}
