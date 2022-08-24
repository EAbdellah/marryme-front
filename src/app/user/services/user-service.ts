import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {catchError, delay, map, mapTo, Observable, of, tap} from "rxjs";
import {RegisterFormValueModel} from "../models/register-form-value.model";
import {RegisterFormDtoModel} from "../models/register-form-dto.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  saveUserInfo(formValue: RegisterFormValueModel): Observable<boolean> {
    return this.http.post(`${environment.apiUrl}/user/register`,formValue).pipe(
      tap(x=>console.info(x)),
      mapTo(true),
      delay(1000),
      catchError(() => of(false).pipe(
        delay(1000)
      ))
    );
  }

}
