import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { NotificationModule } from "./notification.module";
import { NotificationService } from "./user/services/notification.service";
import { AuthenticationService } from "./user/services/authentication.service";
import { AuthenticationGuard } from "./guard/authentication.guard";
import { UserService } from "./user/services/user-service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./interceptor/auth.interceptor";
import {AdminGuardGuard} from "./guard/adminGuard.guard";
import {UserGuardGuard} from "./guard/userGuard.guard";
import {ProviderService} from "./provider/services/provider.service";
import {ProviderGuardGuard} from "./guard/providerGuard.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    NotificationModule
  ],
  providers: [NotificationService, AuthenticationGuard,AdminGuardGuard,UserGuardGuard,ProviderGuardGuard, AuthenticationService, UserService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
