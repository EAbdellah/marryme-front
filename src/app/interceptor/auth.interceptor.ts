import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserService} from "../user/services/user-service";
import {AuthenticationService} from "../user/services/authentication.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService, private authService: AuthenticationService) {}

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    if (httpRequest.url.includes(`${this.authService.host}/user/login`)) {
      return httpHandler.handle(httpRequest);
    }
    if (httpRequest.url.includes(`${this.authService.host}/user/register`)) {
      return httpHandler.handle(httpRequest);
    }
    if (httpRequest.url.includes(`${this.userService.host}/provider/allServices`)) {
      return httpHandler.handle(httpRequest);
    }
    if (httpRequest.url.includes(`${this.userService.host}/provider/getService/1`)) {
      return httpHandler.handle(httpRequest);
    }
    if (httpRequest.url.includes(`${this.userService.host}/provider/getService/2`)) {
      return httpHandler.handle(httpRequest);
    }
    if (httpRequest.url.includes(`${this.userService.host}/provider/getService/3`)) {
      return httpHandler.handle(httpRequest);
    }
    this.authService.loadToken();
    const token = this.authService.getToken();
    const request = httpRequest.clone({ setHeaders: { Authorization: `Bearer ${token}` }});
    return httpHandler.handle(request);
  }
}
