import { Component, OnInit } from '@angular/core';
import {map, Observable, Subscription, tap} from "rxjs";
import {AllServicesDTO} from "../../models/all-services-dto.model";
import {UserService} from "../../services/user-service";
import {IgxFilterOptions} from "igniteui-angular";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-all-services-list',
  templateUrl: './all-services-list.component.html',
  styleUrls: ['./all-services-list.component.scss']
})
export class AllServicesListComponent implements OnInit {

  servicesList$!: Observable<AllServicesDTO[]>;
  public searchContact: string | undefined;
  public searchText!: string;
  value!: string;
  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  constructor(private userService : UserService, private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.servicesList$=this.userService.getAllServices().pipe(
      tap(data =>  console.log(data)));
  }

  onViewService(id:string) {
    this.router.navigateByUrl(`marryme/${id}`);
  }


}
