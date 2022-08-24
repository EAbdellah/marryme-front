import {RouterModule, Routes} from "@angular/router";
import {RegisterFormComponent} from "./components/register-form/register-form.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {path: '', component: RegisterFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule{}
