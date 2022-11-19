import { Injectable } from '@angular/core';
import {SingleReservation} from "../../user/models/single-reservation.model";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {AllServicesDTO} from "../../user/models/all-services-dto.model";
import {RequestRegistrationProviderDTO} from "../model/request-registration-provider-dto.model";
import {User} from "../../user/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {


  public host = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public getAllRequest(): Observable<RequestRegistrationProviderDTO[]> {
    return this.http.get<RequestRegistrationProviderDTO[]>(`${this.host}/admin/getAll`);
  }

  public sendDecision(accepted:boolean, email:string, nom:string): Observable<HttpResponse<any>> {
    const decision = { accepted, email,nom };

    return this.http.post<any>(`${this.host}/admin/decision`,decision, { observe: 'response' });
  }
}
