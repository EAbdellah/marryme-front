import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/user-service";
import {BehaviorSubject, Observable, Subscription, tap} from "rxjs";
import {AllServicesDTO} from "../../models/all-services-dto.model";
import {SingleReservation} from "../../models/single-reservation.model";
import {MatTable} from "@angular/material/table";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation-list-client',
  templateUrl: './reservation-list-client.component.html',
  styleUrls: ['./reservation-list-client.component.css']
})
export class ReservationListClientComponent implements OnInit {
  // reservationList$!: Observable<SingleReservation[]>;
  displayedColumns: string[] = ['ticket', 'serviceType', 'serviceName', 'formuleName', 'reservationDate', 'price', 'status'];
  dataSource !:SingleReservation[];


  // @ViewChild(MatTable) table: MatTable<SingleReservation> | undefined;

  constructor(private userService : UserService, private router: Router) { }

  ngOnInit(): void {
      this.userService.getAllReservation()
        .subscribe(
          (value) => {
            console.log(value);
            this.dataSource = value;},
          (error) => {console.log(error);},
          () => {console.log('Fini !');}
          );
  }

  //   this.reservationList$=this.userService.getAllReservation()
  //       .pipe(
  //         switchMap(res => {
  //           console.log("data: "+res);
  //           this.dataSource = res;
  //         })
  //       )
  // }
  // this.reservationList$=this.userService.getAllReservation()
  //   .subscribe(res => {
  //       console.log("data: "+res);
  //       this.dataSource = res;
  //     }
  //   )

  sendInfo(reservation: SingleReservation) {

    this.userService.sendReservation(reservation)
    this.router.navigateByUrl("marryme/payment");

  }
}
