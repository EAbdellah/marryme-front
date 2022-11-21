import {AfterViewInit, Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {ReservationProviderDashBoardDTO} from "../../models/reservation-provider-dash-board-dto.model";
import {Observable} from "rxjs";
import {FermeturProviderDasBoardDTO} from "../../models/fermetur-provider-das-board-dto.model";
import {DateAdapter, MAT_DATE_LOCALE} from "@angular/material/core";
import {FormControl} from "@angular/forms";
import {MatTabChangeEvent} from "@angular/material/tabs";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {ProviderService} from "../../services/provider.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-view-all-fermeture',
  templateUrl: './view-all-fermeture.component.html',
  styleUrls: ['./view-all-fermeture.component.css']
})
export class ViewAllFermetureComponent implements OnInit {

  @ViewChild('tabGroup') tabGroup: { selectedIndex: any; } | undefined;
  @Input() allFermeture$!: Observable<FermeturProviderDasBoardDTO[]>;
  selected = new FormControl(0);
  // @ts-ignore
  // selected: Date | null;
  chosingDate!: string;
  fermetures: Date[] = [];
  events: string[] = [];
  dateEvenet!: MatDatepickerInputEvent<Date>


  constructor(private providerService: ProviderService,private _adapter: DateAdapter<any>, @Inject(MAT_DATE_LOCALE) private _locale: string,) { }

  ngOnInit(): void {
    this.allFermeture$.subscribe(
      (data)=>{
        // @ts-ignore
        data.forEach(f => this.fermetures.push(new Date(f.date)));
    this.fermetures.sort(  (objA, objB) => objA.getTime()-objB.getTime()  );
  }
  )

  }


  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    return !this.fermetures.find(x => x.toLocaleDateString("fr-FR") == day.toLocaleDateString("fr-FR"));
  };

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    // @ts-ignore
    this.chosingDate = event.value?.toLocaleDateString('fr-FR')
    this.dateEvenet=event;
    // @ts-ignore
    this.day = event.value?.getDay();
  }



  addToList(){
    if (this.dateEvenet.value) {

    if(!this.fermetures.includes(this.dateEvenet.value)) {
      this.providerService.addDateToFermeture(this.chosingDate).subscribe( {
        // complete: () => {  },
        error: (errorResponse: HttpErrorResponse) => {
          console.log(errorResponse)},
        // next:()=>{}

      });
        this.fermetures.push(this.dateEvenet.value)
      this.fermetures.sort(  (objA, objB) => objA.getTime()-objB.getTime());

    }
    }
  }

}
