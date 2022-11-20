import {Component, Input, OnInit} from '@angular/core';
import {ServiceTraiteurProviderDashBoardDTO} from "../../models/service-traiteur-provider-dash-board-dto.model";
import {MediaProviderDashBoardDTO} from "../../models/media-provider-dash-board-dto.model";
import {FormBuilder, FormGroup, Validators, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";
import {ProviderService} from "../../services/provider.service";
import {first, Observable} from "rxjs";
import {A} from "@angular/cdk/keycodes";
import {MakeUPHairProviderDashBoardDTO} from "../../models/make-uphair-provider-dash-board-dto.model";

@Component({
  selector: 'app-view-media-service',
  templateUrl: './view-media-service.component.html',
  styleUrls: ['./view-media-service.component.css']
})
export class ViewMediaServiceComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private providerService:ProviderService) { }


  ngOnInit(): void {
    this.initForm()

    this.providerService.getOwnMedia().pipe(first()).subscribe(
      data=>{
        this.setForm(data)
      }
    )
  }


  initForm() {
    this.form =
      this.fb.group({
      service_id: [{value: 0, disabled: false}],
      nom: [{value: "", disabled: true}],
      is_video: [{value: false, disabled: false}, { validators: [Validators.required], updateOn: "blur" }],
      is_photo: [{value: false, disabled: false}, Validators.required],
      do_album: [{value: false, disabled: false}, Validators.required],
      do_souvenir: [{value: false, disabled: false},  { validators: [Validators.required], updateOn: "blur" }]
      },{
      updateOn: 'blur'
    })
  }

  setForm(data: MediaProviderDashBoardDTO ): void {
      this.form.patchValue({'service_id': data.service_id})
      this.form.patchValue({'nom': data.nom})
      this.form.patchValue({'is_video': data.is_video})
      this.form.patchValue({'is_photo': data.is_photo})
      this.form.patchValue({'do_album': data.do_album})
      this.form.patchValue({'do_souvenir': data.do_souvenir})
    };

  onSubmitForm(form: MediaProviderDashBoardDTO) {
    this.providerService.updateServiceMedia(form).pipe(first()).subscribe(
      data=>{
      })  }
}
