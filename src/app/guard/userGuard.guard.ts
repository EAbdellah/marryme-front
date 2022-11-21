import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { NotificationType } from '../enum/notification-type.enum';
import {AuthenticationService} from "../user/services/authentication.service";
import {NotificationService} from "../user/services/notification.service";

@Injectable({providedIn: 'root'})
export class UserGuardGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router,
              private notificationService: NotificationService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isAuthorized();
  }

  private isAuthorized(): boolean {
    if (this.authenticationService.isUser()) {
      return true;
    }
    if (this.authenticationService.isProvider()){
      this.router.navigate(['/provider']);

    }
    window.alert(`Vous n'avez pas l'authorisation d'accer à cette page`)
    // this.notificationService.notify(NotificationType.ERROR, `You need to log in to access this page`);
    return false;
  }

}
