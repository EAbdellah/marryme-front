import {Component, Input, OnInit} from '@angular/core';
import {SalleProviderDasBoardDTO} from "../../models/salle-provider-das-board-dto.modell";
import {MakeUPHairProviderDashBoardDTO} from "../../models/make-uphair-provider-dash-board-dto.model";
import {FormBuilder, FormGroup, Validators, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";
import {first} from "rxjs";
import {MediaProviderDashBoardDTO} from "../../models/media-provider-dash-board-dto.model";
import {ProviderService} from "../../services/provider.service";

@Component({
  selector: 'app-view-make-up-hair-service',
  templateUrl: './view-make-up-hair-service.component.html',
  styleUrls: ['./view-make-up-hair-service.component.css']
})
export class ViewMakeUpHairServiceComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private providerService:ProviderService) { }

  ngOnInit(): void {

    this.initForm()
    this.providerService.getOwnMakeUpHair().pipe(first()).subscribe(
      data=>{
        this.setForm(data)
      })
  }

  initForm() {
    this.form = this.fb.group({
      service_id: [{value: 0, disabled: false}],
      nom: [{value: "", disabled: true}],
      do_hair: [{value: false, disabled: false}, Validators.required],
      do_make_up: [{value: false, disabled: false}, Validators.required],
      do_man: [{value: false, disabled: false}, Validators.required],
      do_woman: [{value: false, disabled: false}, Validators.required],
      presentation:[{value: false, disabled: false}, Validators.required]

    });
  }

  setForm(data: MakeUPHairProviderDashBoardDTO ): void {
    this.form.patchValue({'service_id': data.service_id})
    this.form.patchValue({'nom': data.nom})
    this.form.patchValue({'do_hair': data.do_hair})
    this.form.patchValue({'do_make_up': data.do_make_up})
    this.form.patchValue({'do_man': data.do_man})
    this.form.patchValue({'do_woman': data.do_woman}), this.form.patchValue({'presentation': data.presentation})

  };



  onSubmitForm(form: MakeUPHairProviderDashBoardDTO) {
    this.providerService.updateServiceMakeUpHair(form).pipe(first()).subscribe(
      data=>{
      })  }
}
