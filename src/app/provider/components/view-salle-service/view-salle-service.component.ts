import {Component, Input, OnInit} from '@angular/core';
import {SalleProviderDasBoardDTO} from "../../models/salle-provider-das-board-dto.modell";
import {FormBuilder, FormGroup, Validators, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";
import {MediaProviderDashBoardDTO} from "../../models/media-provider-dash-board-dto.model";
import {ProviderService} from "../../services/provider.service";
import {first} from "rxjs";

@Component({
  selector: 'app-view-salle-service',
  templateUrl: './view-salle-service.component.html',
  styleUrls: ['./view-salle-service.component.css']
})
export class ViewSalleServiceComponent implements OnInit {

  @Input() salleDTO!: SalleProviderDasBoardDTO;
  form!: FormGroup;

  constructor(private fb: FormBuilder, private providerService:ProviderService) { }


  ngOnInit(): void {
    this.initForm()

    this.providerService.getOwnSalle().pipe(first()).subscribe(
      data=>{
        this.setForm(data)
      }
    )
  }


  initForm() {
      this.form = this.fb.group({
        service_id: [{value: 0, disabled: false}],
        nom: [{value: "", disabled: true}],
        capacite_total: [{value: false, disabled: false}, Validators.required],
        cuisine: [{value: false, disabled: false}, Validators.required],
        decoration: [{value: false, disabled: false}, Validators.required],
        hall_type: [{value: false, disabled: false}, Validators.required],
        have_parking: [{value: false, disabled: false}, Validators.required],
        is_external: [{value: false, disabled: false}, Validators.required],
        materiel_musique: [{value: false, disabled: false}, Validators.required],
        piste_dance: [{value: false, disabled: false}, Validators.required],
        place_assise: [{value: false, disabled: false}, Validators.required],
        capacity: [{value: false, disabled: false}, Validators.required],
        traiteur: [{value: false, disabled: false}, Validators.required],
        voiturier: [{value: false, disabled: false}, Validators.required],
        presentation:[{value: false, disabled: false}, Validators.required]
      });
    }



  setForm(data: SalleProviderDasBoardDTO ): void {
      this.form.patchValue({'service_id': data.service_id})
      this.form.patchValue({'nom': data.nom})
      this.form.patchValue({'capacite_total': data.capacite_total})
      this.form.patchValue({'decoration': data.decoration})
      this.form.patchValue({'cuisine': data.cuisine})
      this.form.patchValue({'hall_type': data.hall_type})
      this.form.patchValue({'have_parking': data.have_parking})
      this.form.patchValue({'is_external': data.is_external})
      this.form.patchValue({'materiel_musique': data.materiel_musique})
      this.form.patchValue({'piste_dance': data.piste_dance})
      this.form.patchValue({'place_assise': data.place_assise})
      this.form.patchValue({'capacity': data.capacity})
      this.form.patchValue({'traiteur': data.traiteur})
      this.form.patchValue({'voiturier': data.voiturier})
      this.form.patchValue({'presentation': data.presentation})

  };


    onSubmitForm(form: SalleProviderDasBoardDTO) {
      this.providerService.updateServiceSalle(form).pipe(first()).subscribe(
        data=>{
        })  }
}
