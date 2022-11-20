import { Injectable } from '@angular/core';
import {RegisterFormValueModel} from "../../user/models/register-form-value.model";
import {BehaviorSubject, catchError, delay, mapTo, Observable, of, tap} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {ProviderRegisterFormDTO} from "../models/provider-register-form-dto.model";
import {SingleReservation} from "../../user/models/single-reservation.model";
import {ReservationProviderDashBoardDTO} from "../models/reservation-provider-dash-board-dto.model";
import {FermeturProviderDasBoardDTO} from "../models/fermetur-provider-das-board-dto.model";
import {FormulesProviderDashBoardDTO} from "../models/formules-provider-dash-board-dto.model";
import {SalleProviderDasBoardDTO} from "../models/salle-provider-das-board-dto.modell";
import {MusiqueProviderDashBoardDTO} from "../models/musique-provider-dash-board-dto.model";
import {MediaProviderDashBoardDTO} from "../models/media-provider-dash-board-dto.model";
import {MakeUPHairProviderDashBoardDTO} from "../models/make-uphair-provider-dash-board-dto.model";
import {TraiteurProviderDashBoardDTO} from "../models/traiteur-provider-dash-board-dto.model";
import {ServiceTraiteurProviderDashBoardDTO} from "../models/service-traiteur-provider-dash-board-dto.model";

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

  public getAllReservation(): Observable<ReservationProviderDashBoardDTO[]> {
    return this.http.get<ReservationProviderDashBoardDTO[]>(`${this.host}/provider/getProviderOwnReservation`);
  }

  public getAllFormule(): Observable<FormulesProviderDashBoardDTO[]> {
    return this.http.get<FormulesProviderDashBoardDTO[]>(`${this.host}/provider/getProviderOwnFormules`);
  }

  public getAllFermeture(): Observable<FermeturProviderDasBoardDTO[]> {
    return this.http.get<FermeturProviderDasBoardDTO[]>(`${this.host}/provider/getProviderOwnFermeture`);
  }

  public getOwnSalle(): Observable<SalleProviderDasBoardDTO> {
    return this.http.get<SalleProviderDasBoardDTO>(`${this.host}/provider/getProviderOwnSalleInfo`);
  }

  public getOwnMusique(): Observable<MusiqueProviderDashBoardDTO> {
    return this.http.get<MusiqueProviderDashBoardDTO>(`${this.host}/provider/getProviderOwnMusiqueInfo`);
  }

  public getOwnMedia(): Observable<MediaProviderDashBoardDTO> {
    return this.http.get<MediaProviderDashBoardDTO>(`${this.host}/provider/getProviderOwnMediaInfo`);
  }
  public getOwnMakeUpHair(): Observable<MakeUPHairProviderDashBoardDTO> {
    return this.http.get<MakeUPHairProviderDashBoardDTO>(`${this.host}/provider/getProviderOwnSMakeUpHairInfo`);
  }
  public getOwnTraiteur(): Observable<TraiteurProviderDashBoardDTO> {
    return this.http.get<TraiteurProviderDashBoardDTO>(`${this.host}/provider/getProviderOwnTraiteurInfo`);
  }
  public getOwnServiceTraiteur(): Observable<ServiceTraiteurProviderDashBoardDTO> {
    return this.http.get<ServiceTraiteurProviderDashBoardDTO>(`${this.host}/provider/getProviderOwnServiceTraiteurInfo`);
  }

  public deleteFormule(formValue: FormulesProviderDashBoardDTO): Observable<boolean> {
    return this.http.post(`${this.host}/provider/deleteFormule`,formValue).pipe(
      tap(x=>console.info(x)),
      mapTo(true),
      delay(1000),
      catchError(() => of(false).pipe(
        delay(1000)
      ))
    );
  }

  public updateFormule(formValue: FormulesProviderDashBoardDTO): Observable<boolean> {
    return this.http.post(`${this.host}/provider/updateFormule`,formValue).pipe(
      tap(x=>console.info(x)),
      mapTo(true),
      delay(1000),
      catchError(() => of(false).pipe(
        delay(1000)
      ))
    );
  }

  public updateServiceSalle(formValue:SalleProviderDasBoardDTO): Observable<boolean> {
    return this.http.post(`${this.host}/provider/updateServiceSalle`,formValue).pipe(
      tap(x=>console.info(x)),
      mapTo(true),
      delay(1000),
      catchError(() => of(false).pipe(
        delay(1000)
      ))
    );
  }

  public updateServiceMusique(formValue:MusiqueProviderDashBoardDTO): Observable<boolean> {
    return this.http.post(`${this.host}/provider/updateServiceMusique`,formValue).pipe(
      tap(x=>console.info(x)),
      mapTo(true),
      delay(1000),
      catchError(() => of(false).pipe(
        delay(1000)
      ))
    );  }

  public updateServiceMedia(formValue:MediaProviderDashBoardDTO): Observable<boolean> {
    return this.http.post(`${this.host}/provider/updateServiceMedia`,formValue).pipe(
      tap(x=>console.info(x)),
      mapTo(true),
      delay(1000),
      catchError(() => of(false).pipe(
        delay(1000)
      ))
    );  }

  public updateServiceMakeUpHair(formValue:MakeUPHairProviderDashBoardDTO): Observable<boolean> {
    return this.http.post(`${this.host}/provider/updateServiceMakeUpHair`,formValue).pipe(
      tap(x=>console.info(x)),
      mapTo(true),
      delay(1000),
      catchError(() => of(false).pipe(
        delay(1000)
      ))
    );  }

  public updateServiceTraiteur(formValue:TraiteurProviderDashBoardDTO): Observable<boolean> {
    return this.http.post(`${this.host}/provider/updateServiceTraiteur`,formValue).pipe(
      tap(x=>console.info(x)),
      mapTo(true),
      delay(1000),
      catchError(() => of(false).pipe(
        delay(1000)
      ))
    );  }

  public updateServiceTraiteurService(formValue:ServiceTraiteurProviderDashBoardDTO): Observable<boolean> {
    return this.http.post(`${this.host}/provider/updateServiceTraiteurService`,formValue).pipe(
      tap(x=>console.info(x)),
      mapTo(true),
      delay(1000),
      catchError(() => of(false).pipe(
        delay(1000)
      ))
    );  }

  public sendDecision(accepted:boolean, ticket:string): Observable<HttpResponse<any>> {
    const decision = { accepted, ticket };

    return this.http.post<any>(`${this.host}/provider/decision`,decision, { observe: 'response' });
  }
}
