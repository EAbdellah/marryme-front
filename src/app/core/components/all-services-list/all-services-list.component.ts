import {Component, OnInit} from '@angular/core';
import {map, Observable, Subscription, tap} from "rxjs";
import {AllServicesDTO} from "../../../user/models/all-services-dto.model";
import {UserService} from "../../../user/services/user-service";
import {IgxFilterOptions} from "igniteui-angular";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {AuthenticationService} from "../../../user/services/authentication.service";

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
  selectedIndex!: number | undefined;

  // services !: AllServicesDTO[]
  // serviceFiltered: AllServicesDTO[] = [];

  toppings = this._formBuilder.group({
    SalleEntity: false,
    MusiqueEntity: false,
    MediaEntity: false,
    TraiteurEntity: false,
    ServiceTraiteurEntity: false,
    MakeUpAndHairEntity: false,

  });

  servicesCheckBox: any = [
    {id: 1,label:"Salle" ,name: "SalleEntity", value: false},
    {id: 2,label:"Musique"  ,name: "MusiqueEntity", value: false},
    {id: 1,label:"Media" ,name: "MediaEntity", value: false},
    {id: 2,label:"Traiteur"  ,name: "TraiteurEntity", value: false},
    {id: 1,label:"Service Traiteur" ,name: "ServiceTraiteurEntity", value: false},
    {id: 2,label:"MakeUpAndAir"  ,name: "MakeUpAndHairEntity", value: false},
  ];

  services: AllServicesDTO[] = []
  serviceFiltered: AllServicesDTO[] = [];


  constructor(private userService: UserService, private router: Router, private _formBuilder: FormBuilder,private auth:AuthenticationService) {
  }

  ngOnInit(): void {
    this.userService.getAllServices().pipe(
      tap(data => {
          console.log(data)
          this.services = data
        this.serviceFiltered=data;
        }
      )).subscribe();
  }

  onViewService(id: string) {
    this.router.navigateByUrl(`user/${id}`);
  }





  changeSelection(event:MatCheckboxChange, index: number, name: any) {
    this.selectedIndex = event.checked ? index : undefined;
    // if ( event.checked ) {
      if ( event.checked ) {

        this.serviceFiltered=this.services.filter((s) => {
        return s.type == name;
      })
    }else {
      this.serviceFiltered=this.services;
    }
    // do your logic here...
  }

  }
