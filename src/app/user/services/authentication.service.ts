import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, delay, first, map, mapTo, Observable, of, tap} from "rxjs";
import {environment} from "../../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";
import {RegisterFormValueModel} from "../models/register-form-value.model";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public host = environment.apiUrl;
  private token!: string  ;
  private loggedInUsername!: string ;
  private jwtHelper = new JwtHelperService();
  public isAuthenticated$!: Observable<boolean> ;


  constructor(private http: HttpClient) {}

  saveUserInfo(formValue: RegisterFormValueModel): Observable<boolean> {
    return this.http.post(`${this.host}/user/register`,formValue).pipe(
      tap(x=>console.info(x)),
      mapTo(true),
      delay(1000),
      catchError(() => of(false).pipe(
        delay(1000)
      ))
    );
  }


  public login(email:string, password:string): Observable<HttpResponse<User>> {
    const crendential = { email, password };
    return this.http.post<User>(`${this.host}/user/login`, crendential, { observe: 'response' });
  }


  // public register(user: User): Observable<User> {
  //   return this.http.post<User>(`${this.host}/user/register`, user);
  // }

  public logOut(): void {
    // @ts-ignore
    this.token = null;
    // @ts-ignore
    this.loggedInUsername = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('users');
  }

  public saveToken(token: string ): void {
    // @ts-ignore
    this.token = token;
    // @ts-ignore
    localStorage.setItem('token', token);

  }

  public addUserToLocalCache(user: User ): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserFromLocalCache(): User {
    return JSON.parse(<string>localStorage.getItem('user'));
  }

  public loadToken(): void {
    // @ts-ignore
    this.token = localStorage.getItem('token');
  }

  public getToken(): string {
    return <string>this.token;
  }

  // @ts-ignore
  public isUserLoggedIn(): boolean {
    this.loadToken();
    if (this.token != null && this.token !== ''){
      if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
        if (!this.jwtHelper.isTokenExpired(this.token)) {
          this.loggedInUsername = this.jwtHelper.decodeToken(this.token).sub;
          return true;
        }
      }
    } else {
      this.logOut();
      return false;
    }
  }

  public isAuthenticate():Observable<boolean>{
    return this.isAuthenticated$.pipe(
      map(x=> this.isUserLoggedIn())
    )
  }

  // @ts-ignore
  public getServiceType(): string{
    this.loadToken();
    if (this.token != null && this.token !== ''){
      if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
        if (!this.jwtHelper.isTokenExpired(this.token)) {
          let decodedJWT = JSON.parse(window.atob(this.token.split('.')[1]));
          return decodedJWT.type;
        }
      }
    }
  }

  // @ts-ignore
  public isUser(): boolean{
    this.loadToken();
    if (this.token != null && this.token !== ''){
      if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
        if (!this.jwtHelper.isTokenExpired(this.token)) {
          let decodedJWT = JSON.parse(window.atob(this.token.split('.')[1]));
          if (decodedJWT.whichCustomer==='ROLE_USER'){
          return true;
        }
        }
      }
    }
  }

  // @ts-ignore
  public isProvider(): boolean{
    this.loadToken();
    if (this.token != null && this.token !== ''){
      if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
        if (!this.jwtHelper.isTokenExpired(this.token)) {
          let decodedJWT = JSON.parse(window.atob(this.token.split('.')[1]));
          if (decodedJWT.whichCustomer==='ROLE_PRESTATAIRE_ADMIN'){
            return true;
          }
        }
      }
    }
  }


  // @ts-ignore
  public isAdmin(): boolean{
    this.loadToken();
    if (this.token != null && this.token !== ''){
      if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
        if (!this.jwtHelper.isTokenExpired(this.token)) {
          let decodedJWT = JSON.parse(window.atob(this.token.split('.')[1]));
          if (decodedJWT.whichCustomer==='ROLE_ADMIN'){
            return true;
          }
        }
      }
    }
  }

}
