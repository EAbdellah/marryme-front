import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {catchError, delay, map, mapTo, Observable, of, tap} from "rxjs";
import {RegisterFormValueModel} from "../models/register-form-value.model";
import {User} from "../models/user.model";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // public host = environment.apiUrl;
  // private token!: string  ;
  // private loggedInUsername!: string ;
  // private jwtHelper = new JwtHelperService();
  //
  // constructor(private http: HttpClient) {}
  //
  // saveUserInfo(formValue: RegisterFormValueModel): Observable<boolean> {
  //   return this.http.post(`${this.host}/user/register`,formValue).pipe(
  //     tap(x=>console.info(x)),
  //     mapTo(true),
  //     delay(1000),
  //     catchError(() => of(false).pipe(
  //       delay(1000)
  //     ))
  //   );
  // }
  //
  //
  // public login(email:string, password:string): Observable<HttpResponse<User>> {
  //   const crendential = { email, password };
  //   return this.http.post<User>(`${this.host}/user/login`, crendential, { observe: 'response' });
  // }
  //
  //
  // // public register(user: User): Observable<User> {
  // //   return this.http.post<User>(`${this.host}/user/register`, user);
  // // }
  //
  // public logOut(): void {
  //   // @ts-ignore
  //   this.token = null;
  //   // @ts-ignore
  //   this.loggedInUsername = null;
  //   localStorage.removeItem('user');
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('users');
  // }
  //
  // public saveToken(token: string ): void {
  //   // @ts-ignore
  //   this.token = token;
  //     // @ts-ignore
  //   localStorage.setItem('token', token);
  //
  // }
  //
  // public addUserToLocalCache(user: User ): void {
  //   localStorage.setItem('user', JSON.stringify(user));
  // }
  //
  // public getUserFromLocalCache(): User {
  //   return JSON.parse(<string>localStorage.getItem('user'));
  // }
  //
  // public loadToken(): void {
  //   // @ts-ignore
  //   this.token = localStorage.getItem('token');
  // }
  //
  // public getToken(): string {
  //   return <string>this.token;
  // }
  //
  // // @ts-ignore
  // public isUserLoggedIn(): boolean {
  //   this.loadToken();
  //   if (this.token != null && this.token !== ''){
  //     if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
  //       if (!this.jwtHelper.isTokenExpired(this.token)) {
  //         this.loggedInUsername = this.jwtHelper.decodeToken(this.token).sub;
  //         return true;
  //       }
  //     }
  //   } else {
  //     this.logOut();
  //     return false;
  //   }
  // }
}
