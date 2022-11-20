import {Component, Input, OnInit} from '@angular/core';
import {MusiqueProviderDashBoardDTO} from "../../models/musique-provider-dash-board-dto.model";
import {ServiceTraiteurProviderDashBoardDTO} from "../../models/service-traiteur-provider-dash-board-dto.model";
import {FormBuilder, FormGroup, Validators, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";
import {SalleProviderDasBoardDTO} from "../../models/salle-provider-das-board-dto.modell";
import {ProviderService} from "../../services/provider.service";
import {first} from "rxjs";

@Component({
  selector: 'app-view-service-traiteur-service',
  templateUrl: './view-service-traiteur-service.component.html',
  styleUrls: ['./view-service-traiteur-service.component.css']
})
export class ViewServiceTraiteurServiceComponent implements OnInit {
  @Input() serviceTraitDTO!: ServiceTraiteurProviderDashBoardDTO;

  form!: FormGroup;



      constructor(private fb: FormBuilder, private providerService:ProviderService) { }


      ngOnInit(): void {
        this.initForm()

        this.providerService.getOwnServiceTraiteur().pipe(first()).subscribe(
          data=>{
            this.setForm(data)
          }
        )
      }


  initForm() {
    this.form = this.fb.group({
      service_id: [{value: 0, disabled: false}],
      nom: [{value: "", disabled: true}],
      man_only: [{value: false, disabled: false}, Validators.required],
      woman_only: [{value: false, disabled: false}, Validators.required],

    });
  }



  setForm(data: ServiceTraiteurProviderDashBoardDTO ): void {
    this.form.patchValue({'service_id': data.serviceId})
    this.form.patchValue({'nom': data.nom})
    this.form.patchValue({'man_only': data.man_only})
    this.form.patchValue({'woman_only': data.woman_only})

  };



  onSubmitForm(form: ServiceTraiteurProviderDashBoardDTO) {
    this.providerService.updateServiceTraiteurService(form).pipe(first()).subscribe(
      data=>{
      })  }
}
