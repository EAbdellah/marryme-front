import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { RedirectRegistrationComponent } from './components/redirect-registration/redirect-registration.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, RedirectRegistrationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
    exports: [
        HeaderComponent,
        FooterComponent,
        RedirectRegistrationComponent
    ]
})
export class CoreModule { }
