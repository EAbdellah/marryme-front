import {AfterViewInit, Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user-service";
import {BehaviorSubject, first, Observable, tap} from "rxjs";
import {Formule, SingleService} from "../../models/single-service.model";
import {DateAdapter, MAT_DATE_LOCALE} from "@angular/material/core";
import 'moment/locale/fr';
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {FormControl} from '@angular/forms';
import {MatTabChangeEvent, MatTabGroup} from "@angular/material/tabs";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {User} from "../../models/user.model";
import {HeaderType} from "../../../enum/header-type.enum";

export interface Holliday {
  d: string;
  r: string;
}

@Component({
  selector: 'app-provider-service',
  templateUrl: './provider-service.component.html',
  styleUrls: ['./provider-service.component.scss'],
})
export class ProviderServiceComponent implements AfterViewInit, OnInit {

  services$!: Observable<SingleService>;
  idService!: number;
  fermetures: Date[] = [];
  formules: Formule[]= [];
  events: string[] = [];
  chosingDate!: string;
  selected = new FormControl(0);
  day!: number;
  val!: string;
  hollidayName!: string
  basicPrice!:number | null ;
  sup!:number ;
  price!:number;

  hollidyas: Holliday[] = [
    {d: "01/01/2022", r: "Jour de l'an"},
    {d: "18/04/2022", r: "Lundi de Pâques"},
    {d: "01/05/2022", r: "Fête du Travail"},
    {d: "26/05/2022", r: "Ascension"},
    {d: "06/06/2022", r: "Lundi de Pentecôte"},
    {d: "21/06/2022", r: "Fête nationale belge"},
    {d: "15/08/2022", r: "Assomption"},
    {d: "01/11/2022", r: "Toussaint"},
    {d: "11/11/2022", r: "Armistice"},
    {d: "25/12/2022", r: "Jour de Noël"}
  ]


  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    return !this.fermetures.find(x => x.toLocaleDateString("fr-FR") == day.toLocaleDateString("fr-FR"));
  };
  //
  @ViewChild('tabGroup') tabGroup: { selectedIndex: any; } | undefined;



  constructor(private userService: UserService, private route: ActivatedRoute,
              private _adapter: DateAdapter<any>,
              @Inject(MAT_DATE_LOCALE) private _locale: string,
              ) {
  }


  ngOnInit(): void {

    const serviceId = +this.route.snapshot.params['id'];
    this.services$ = this.userService.getServiceByID(serviceId).pipe(
      first(),
      tap(
        data => {
          console.log(data);
          data.fermetures.forEach(f => this.fermetures.push(new Date(f.date)));
          this.formules=data.formules;
          this.idService = data.serviceID;
        }
      )
    )


  }







  ngAfterViewInit() {
    console.log('afterViewInit => ', this.tabGroup?.selectedIndex);
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    // console.log(this.formules[tabChangeEvent.index-1]);

    console.log('tabChangeEvent => ', tabChangeEvent.index);
    console.log('index => ', tabChangeEvent.index);
    console.log('index => ', tabChangeEvent.tab.textLabel);
    console.log(this.formules[tabChangeEvent.index-1]);
    this.basicPrice = this.formules[tabChangeEvent.index-1]?.prix
    this.price=this.getPrice()

  }


  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    // @ts-ignore
    this.chosingDate = event.value?.toLocaleDateString('fr-FR')
    // @ts-ignore
    this.day = event.value?.getDay();

    this.price=this.getPrice()
  }



  dayType(): string {
    return this.val = this.findHollidayName() ? 'Jour ferier: ' + this.hollidayName
      : this.getValue() ? this.getValue() : this.findVeilleOfHollidayName() ? 'Veille de: ' + this.hollidayName : '';
  }

  daySup(): number {
    if (typeof this.selected.value === "number") {

      let index:number = this.selected.value -1;

      return this.sup = this.dayType().includes('ferier')? this.formules[index]?.supFerrier :
        this.val.includes('Samedi')?this.formules[index]?.supSamedi :
                              this.val.includes('Dimanche')?this.formules[index]?.supDimanche :
                                                this.val.includes('Veille')?this.formules[index]?.supVeilleFerier :
                                                            this.val.includes('Vendredi')?this.formules[index]?.supvendredi : 0
    }
    return 0
  }

  getVeille(date: string): string | undefined {
    var yesterday = new Date(date?.split('/').reverse().join('/'));
    yesterday.setDate(yesterday.getDate() - 1)
    return yesterday.toLocaleDateString('fr-FR')
  }


  findVeilleOfHollidayName(): string {
    this.hollidayName = this.hollidyas
      .filter(holliday => this.chosingDate == this.getVeille(holliday.d)).map(holliday => holliday.r)[0];
    return this.hollidayName;
  }


  findHollidayName(): string {
    // console.log(this.count++);
    this.hollidayName = this.hollidyas.filter(holliday => this.chosingDate == holliday.d).map(holliday => holliday.r)[0];
    return this.hollidayName;
  }

  getPrice():number{
    console.log("Sup: "+this.sup);
    console.log("basicPrice: "+this.basicPrice);
    console.log("dayType: "+this.dayType());
    console.log("daySup: "+this.daySup());

    // @ts-ignore

    this.price= this.sup+this.basicPrice;

    return this.price;
  }

  getValue(): string {
    switch (this.day) {
      case 6:
        return 'Samedi'
        break;
      case 5:
        return 'Vendredi'
        break;
      case 0:
        return 'Dimanche'
        break;
      default:
        return '';
    }
  }



  onFinalize() {

      let formatDate  =this.chosingDate.split("/").reverse().join("-");
      let formulID =  this.formules[this.selected.value!-1]?.formuleID;
      let file = null

       console.log(formatDate);

    // @ts-ignore
    this.userService.reservationRequest(formatDate,formulID,this.price,file)
      .subscribe({
        // complete: () => {  },
        error: (errorResponse: HttpErrorResponse) => {
          console.log(errorResponse)

        },
        // next: (response: HttpResponse<any>) => {
        //   const token = response.headers.get(HeaderType.JWT_TOKEN);
        //   console.log("****response: "+JSON.stringify(response.headers.keys()))
        //   console.log("****body: "+JSON.stringify(response.body))
        //   console.log("****token: "+token)
        //   // @ts-ignore
        //   // this.authService.saveToken(token);
        //   // // @ts-ignore
        //   // this.authService.addUserToLocalCache(response.body);
        //   this.router.navigateByUrl('/marryme');
        // },
      });

    //
    // console.log(console.log(
    //   "Service id: " + this.idService +
    //   ", formule id: " + this.formules[this.selected.value!-1]?.formuleID +
    //   ", Chosen date: " + this.chosingDate.split("/").reverse().join("-") +
    //   ", Price: " + this.price
    // ))
  };



}
