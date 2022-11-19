import {Component, Input, OnInit} from '@angular/core';
import {SalleProviderDasBoardDTO} from "../../models/salle-provider-das-board-dto.modell";
import {FormBuilder, FormGroup, Validators, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Component({
  selector: 'app-view-salle-service',
  templateUrl: './view-salle-service.component.html',
  styleUrls: ['./view-salle-service.component.css']
})
export class ViewSalleServiceComponent implements OnInit {

  @Input() salleDTO!: SalleProviderDasBoardDTO;
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
        nom: [{value: this.salleDTO.nom, disabled: true}],
      capacite_total: [{value: this.salleDTO.capacite_total, disabled: false}, Validators.required],
      cuisine: [{value: this.salleDTO.cuisine, disabled: false}, Validators.required],
      decoration: [{value: this.salleDTO.decoration, disabled: false}, Validators.required],
      hall_type: [{value: this.salleDTO.hall_type, disabled: false}, Validators.required],
      have_parking: [{value: this.salleDTO.have_parking, disabled: false}],
      is_external: [{value: this.salleDTO.is_external, disabled: false}, Validators.required],
      materiel_musique: [{value: this.salleDTO.materiel_musique, disabled: false}, Validators.required],
      piste_dance: [{value: this.salleDTO.piste_dance, disabled: false}, Validators.required],
      place_assise: [{value: this.salleDTO.place_assise, disabled: false}, Validators.required],
      traiteur: [{value: this.salleDTO.traiteur, disabled: false}],
      capacity: [{value: this.salleDTO.capacity, disabled: false}, Validators.required],
      voiturier: [{value: this.salleDTO.voiturier, disabled: false}, Validators.required],
      }
    );
  }

  onSubmitForm(value: ɵTypedOrUntyped<any, ɵFormGroupValue<any>, any>) {
    console.log(value)
  }
}
