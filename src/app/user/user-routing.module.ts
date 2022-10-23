import {RouterModule, Routes} from "@angular/router";
import {RegisterFormComponent} from "./components/register-form/register-form.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'marryme', component: HomeComponent},
  {path: 'register', component: RegisterFormComponent },
  { path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule{}
