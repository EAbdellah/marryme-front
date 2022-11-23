import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./core/components/login/login.component";
import {RedirectRegistrationComponent} from "./core/components/redirect-registration/redirect-registration.component";
import {AuthenticationGuard} from "./guard/authentication.guard";
import {HomeComponent} from "./core/components/home/home.component";
import {AllServicesListComponent} from "./core/components/all-services-list/all-services-list.component";
import {RegisterFormComponent} from "./core/components/register-form/register-form.component";
import {RegisterProviderComponent} from "./core/components/register-provider/register-provider.component";
import {UserGuardGuard} from "./guard/userGuard.guard";
import {ProviderGuardGuard} from "./guard/providerGuard.guard";
import {AdminGuardGuard} from "./guard/adminGuard.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'redirectRegistration', component: RedirectRegistrationComponent},
  {path: 'register/customer', component: RegisterFormComponent },
  {path: 'register/provider', component: RegisterProviderComponent },

  { path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [AuthenticationGuard,UserGuardGuard]},

  { path: 'provider',
    loadChildren: () => import('./provider/provider.module').then(m => m.ProviderModule),
    canActivate: [AuthenticationGuard,ProviderGuardGuard] },

  { path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthenticationGuard,AdminGuardGuard] },

  { path: 'allService', component: AllServicesListComponent},
  { path: '', component: AllServicesListComponent},
  // {path:' ', redirectTo:'AllServicesListComponent'}
  {path:'**', redirectTo:'allService'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
