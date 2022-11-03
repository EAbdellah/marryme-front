import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {catchError, delay, first, map, mapTo, Observable, of, tap} from "rxjs";
import {RegisterFormValueModel} from "../models/register-form-value.model";
import {User} from "../models/user.model";
import {JwtHelperService} from "@auth0/angular-jwt";
import {AllServicesDTO} from "../models/all-services-dto.model";
import {SingleService} from "../models/single-service.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public host = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public getAllServices(): Observable<AllServicesDTO[]> {
    return this.http.get<AllServicesDTO[]>(`${this.host}/provider/allServices`);
  }

  // public getServiceByID(id: number): Observable<SingleService> {
  //   return this.http.get<SingleService>(`${this.host}/provider/getService/${id}`);
  // }

  public getServiceByID(id: number): Observable<SingleService> {
    return this.http
      .get<SingleService>(`${this.host}/provider/getService/${id}`)
      .pipe(
        first(),
        map(project => project as SingleService,
            (thisArg: any) => console.log('thisArg : ' + JSON.stringify(thisArg))
        ));
  }
}
