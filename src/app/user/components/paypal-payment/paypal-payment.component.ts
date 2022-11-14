import {Component, Input, OnInit} from '@angular/core';
import {SingleReservation} from "../../models/single-reservation.model";
import {UserService} from "../../services/user-service";
import {render} from 'creditcardpayments/creditCardPayments';
import {defaultTargetBuilders} from "@angular/cdk/schematics";
import {Router} from "@angular/router";
import {ReservationPaidDTO} from "../../models/reservation-paid-dto.model";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {User} from "../../models/user.model";
import {HeaderType} from "../../../enum/header-type.enum";

@Component({
  selector: 'app-paypal-payment',
  templateUrl: './paypal-payment.component.html',
  styleUrls: ['./paypal-payment.component.css']
})
export class PaypalPaymentComponent implements OnInit {


  reservation!: SingleReservation;

  // reservationPayment!: ReservationPaidDTO;

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {

    this.userService.currentReservation.subscribe(
      data => this.reservation = data as SingleReservation
    )

    console.log("ticket: " + this.reservation.ticket)
    console.log("ticket2: " + JSON.stringify(this.reservation))

    render({
      id: "#myPaypalButtons",
      currency: 'EUR',
      value: this.reservation.price!.toString(),

      onApprove: (details) => {

        this.userService.reservationPayment(this.reservation.ticket!, details.id, details.status, details.payer.payerId).subscribe(
          {
            next: () => {
            },
            error: (errorResponse: HttpErrorResponse) => {
              console.log(errorResponse)
            },
            complete: () => {
              this.router.navigateByUrl("marryme/reservations")

            }
          }
        )

      }
    }
    )

    // const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    // this.router.navigateByUrl("marryme/reservations")

  }


}
