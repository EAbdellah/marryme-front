import {Component, Input, OnInit} from '@angular/core';
import {SingleReservation} from "../../models/single-reservation.model";
import {UserService} from "../../services/user-service";
// import { render } from 'creditcardpayments/creditCardPayments';
import {defaultTargetBuilders} from "@angular/cdk/schematics";
@Component({
  selector: 'app-paypal-payment',
  templateUrl: './paypal-payment.component.html',
  styleUrls: ['./paypal-payment.component.css']
})
export class PaypalPaymentComponent implements OnInit {

  reservation!:SingleReservation;
  constructor( private userService:UserService) {
  //   render({
  //     id:"#myPaypalButtons",
  //     currency:"EUR",
  //     // @ts-ignore
  //     value:this.reservation.price,
  //   onApprove:(defails)=>{
  //       alert("transaction successfull")
  //   }
  //   })
  //
  }

  ngOnInit(): void {
    this.userService.currentReservation.subscribe(
      data=>this.reservation=data
    )
  }



}
