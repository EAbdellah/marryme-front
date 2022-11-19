import {Component, Input, OnInit} from '@angular/core';
import {SalleProviderDasBoardDTO} from "../../models/salle-provider-das-board-dto.modell";
import {MakeUPHairProviderDashBoardDTO} from "../../models/make-uphair-provider-dash-board-dto.model";
import {FormBuilder, FormGroup, Validators, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Component({
  selector: 'app-view-make-up-hair-service',
  templateUrl: './view-make-up-hair-service.component.html',
  styleUrls: ['./view-make-up-hair-service.component.css']
})
export class ViewMakeUpHairServiceComponent implements OnInit {
  @Input() makeUpHairDTO!: MakeUPHairProviderDashBoardDTO;
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
        nom: [{value: this.makeUpHairDTO.nom, disabled: true}],
      do_hair: [{value: this.makeUpHairDTO.do_hair, disabled: false}, Validators.required],
      do_make_up: [{value: this.makeUpHairDTO.do_make_up, disabled: false}, Validators.required],
      do_man: [{value: this.makeUpHairDTO.do_man, disabled: false}, Validators.required],
      do_woman: [{value: this.makeUpHairDTO.do_woman, disabled: false}, Validators.required]
      }
    );
  }

  onSubmitForm(value: ɵTypedOrUntyped<any, ɵFormGroupValue<any>, any>) {
    console.log(value)
  }
}
