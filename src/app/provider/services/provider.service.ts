import { Injectable } from '@angular/core';
import {RegisterFormValueModel} from "../../user/models/register-form-value.model";
import {catchError, delay, mapTo, Observable, of, tap} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ProviderRegisterFormDTO} from "../models/provider-register-form-dto.model";

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  public host = environment.apiUrl;


  constructor(private http: HttpClient) { }

  saveProviderInfo(formValue: ProviderRegisterFormDTO): Observable<boolean> {
    return this.http.post(`${this.host}/provider/register`,formValue).pipe(
      tap(x=>console.info(x)),
      mapTo(true),
      delay(1000),
      catchError(() => of(false).pipe(
        delay(1000)
      ))
    );
  }

}
