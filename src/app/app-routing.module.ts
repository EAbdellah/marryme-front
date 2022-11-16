import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./core/components/login/login.component";
import {RedirectRegistrationComponent} from "./core/components/redirect-registration/redirect-registration.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'redirectRegistration', component: RedirectRegistrationComponent},
  { path: 'marryme', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'provider', loadChildren: () => import('./provider/provider.module').then(m => m.ProviderModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path:'**', redirectTo:'marryme'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
