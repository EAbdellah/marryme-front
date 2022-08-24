import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, first, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {



  constructor(private http: HttpClient) {}



  // private auth: BehaviorSubject<{ id: any, token: any, username: any }> = new BehaviorSubject<{ id: any, token: any, username: any }>(this.getUserData());
  //
  // public readonly username: Observable<string> = this.auth.asObservable().pipe(
  //   map(value => {
  //     if (value === undefined || value === null) {
  //       return '';
  //     } else {
  //       return value.username;
  //     }
  //   }));
  //
  // getUserData(): { id: number, username: string, token: string } {
  //   return JSON.parse(<string>sessionStorage.getItem('currentUser'));
  // }
  //
  // isLoggedIn(): boolean {
  //   return !!(sessionStorage.getItem('currentUser'));
  // }
  //
  // login(username: string, password: string): Observable<void> {
  //   return this.http
  //     .post<any>("this.url_authentication", {username: username, password: password})
  //     .pipe(
  //       first(),
  //       map((res: any) => {
  //         // login successful if there's a jwt token in the response
  //         if (res && res.token && res.username && res.id) {
  //           sessionStorage.setItem('currentUser', JSON.stringify({
  //             id: res.id,
  //             token: res.token,
  //             username: res.username
  //           }));
  //         }
  //
  //         this.auth.next({id: res.id, token: res.token, username: res.username});
  //       }));
  // }
  //
  // logout() {
  //
  // }
}
