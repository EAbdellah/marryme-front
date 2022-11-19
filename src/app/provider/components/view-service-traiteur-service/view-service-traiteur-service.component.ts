import {Component, Input, OnInit} from '@angular/core';
import {MusiqueProviderDashBoardDTO} from "../../models/musique-provider-dash-board-dto.model";
import {ServiceTraiteurProviderDashBoardDTO} from "../../models/service-traiteur-provider-dash-board-dto.model";
import {FormBuilder, FormGroup, Validators, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Component({
  selector: 'app-view-service-traiteur-service',
  templateUrl: './view-service-traiteur-service.component.html',
  styleUrls: ['./view-service-traiteur-service.component.css']
})
export class ViewServiceTraiteurServiceComponent implements OnInit {
  @Input() serviceTraitDTO!: ServiceTraiteurProviderDashBoardDTO;

  form!: FormGroup;



  constructor(private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
        nom: [{value: this.serviceTraitDTO.nom, disabled: true}],
        man_only: [{value: this.serviceTraitDTO.man_only, disabled: false}, Validators.required],
        woman_only: [{value: this.serviceTraitDTO.woman_only, disabled: false}, Validators.required]
      }
    );
  }


  onSubmitForm(value: ɵTypedOrUntyped<any, ɵFormGroupValue<any>, any>) {
console.log(value)
  }
}
