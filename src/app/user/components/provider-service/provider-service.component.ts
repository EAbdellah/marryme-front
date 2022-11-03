import {Component, Inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user-service";
import {first, Observable, tap} from "rxjs";
import {Formule, SingleService} from "../../models/single-service.model";
import {DateAdapter,MAT_DATE_LOCALE} from "@angular/material/core";
import 'moment/locale/fr';
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-provider-service',
  templateUrl: './provider-service.component.html',
  styleUrls: ['./provider-service.component.scss'],
})
export class ProviderServiceComponent implements OnInit {

  services$!: Observable<SingleService>;
  idService!:number;
  fermetures: Date[] = [];
  events: string[] = [];
  chosingDate!: string;
  selected = new FormControl(0);
  index!:number|any;

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).toLocaleDateString('fr-FR');
    return !this.fermetures.find(x=>x.toLocaleDateString('fr-FR')==day);
  };



  constructor(private userService: UserService, private route: ActivatedRoute,
              private _adapter: DateAdapter<any>,
              @Inject(MAT_DATE_LOCALE) private _locale: string) {
  }

  ngOnInit(): void {
    const serviceId = +this.route.snapshot.params['id'];
    this.services$ = this.userService.getServiceByID(serviceId).pipe(
      first(),
      tap(
        data => {
          console.log(data);
          data.fermetures.forEach(f => this.fermetures.push(new Date(f.date)));
          this.idService = data.serviceID;
        }
      )
    )
  }


  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    // @ts-ignore
    this.chosingDate = event.value?.toLocaleDateString('fr-FR')
  }


  onFinalize() {
    console.log(console.log(
      "Service id: "+ this.idService + ", formule id: "+this.selected.value + ", Chosen date: " +this.chosingDate
    ))
  };

}
