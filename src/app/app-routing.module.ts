import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'register-form', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  {path:'**', redirectTo:'register-form'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
