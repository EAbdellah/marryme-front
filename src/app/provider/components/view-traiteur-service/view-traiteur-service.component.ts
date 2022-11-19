import {Component, Input, OnInit} from '@angular/core';
import {MediaProviderDashBoardDTO} from "../../models/media-provider-dash-board-dto.model";
import {TraiteurProviderDashBoardDTO} from "../../models/traiteur-provider-dash-board-dto.model";
import {FormBuilder, FormGroup, Validators, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";
import {Observable} from "rxjs";
import {ProviderService} from "../../services/provider.service";

@Component({
  selector: 'app-view-traiteur-service',
  templateUrl: './view-traiteur-service.component.html',
  styleUrls: ['./view-traiteur-service.component.css']
})
export class ViewTraiteurServiceComponent implements OnInit {

  form!: FormGroup;
  traiteurDTO$!: Observable<TraiteurProviderDashBoardDTO>


  constructor(private fb: FormBuilder, private providerService: ProviderService) {
  }

  ngOnInit(): void {
    this.traiteurDTO$ = this.providerService.getOwnTraiteur();
    this.formCreation()
    this.initForm()

  }

  formCreation() {
    this.form = this.fb.group({
      service_id: [{value: 0, disabled: false}],
      nom: [{value: "", disabled: true}],
      do_vegan: [{value: false, disabled: false}, Validators.required],
      do_fish: [{value: false, disabled: false}, Validators.required],
      do_meat: [{value: false, disabled: false}, Validators.required],
      do_vegetarian: [{value: false, disabled: false}, Validators.required]
    });

  }

  initForm() {
    this.traiteurDTO$.subscribe(data => {
      this.form.patchValue({'service_id': data.service_id})
      this.form.patchValue({'nom': data.nom})
      this.form.patchValue({'do_vegan': data.do_vegan})
      this.form.patchValue({'do_fish': data.do_fish})
      this.form.patchValue({'do_meat': data.do_meat})
      this.form.patchValue({'do_vegetarian': data.do_vegetarian})

    });
  }

  onSubmitForm(value: TraiteurProviderDashBoardDTO) {
    console.log(value.service_id)
    console.log(value)
  }
}
