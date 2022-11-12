import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, catchError, delay, first, map, mapTo, Observable, of, tap} from "rxjs";
import {RegisterFormValueModel} from "../models/register-form-value.model";
import {User} from "../models/user.model";
import {JwtHelperService} from "@auth0/angular-jwt";
import {AllServicesDTO} from "../models/all-services-dto.model";
import {SingleService} from "../models/single-service.model";
import {SingleReservation} from "../models/single-reservation.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  dataSource !:SingleReservation[];
  private reservationSource= new BehaviorSubject(new SingleReservation())
  currentReservation = this.reservationSource.asObservable();
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

  public reservationRequest(reservationDate:string, formuleId:number, price:number,file:File ): Observable<HttpResponse<any>> {
    const reservationRequestDTO = { reservationDate, formuleId,price,file };
    return this.http.post<any>(`${this.host}/provider/reservationRequest`, reservationRequestDTO);
  }

  public getAllReservation(): Observable<SingleReservation[]> {
    return this.http.get<SingleReservation[]>(`${this.host}/provider/getAllReservation`);
  }

  public sendReservation(reservation: SingleReservation) {
    this.reservationSource.next(reservation);
  }

}
