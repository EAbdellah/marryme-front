import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'marryme', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  {path:'**', redirectTo:'marryme'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
