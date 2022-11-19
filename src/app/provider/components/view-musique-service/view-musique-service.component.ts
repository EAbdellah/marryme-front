import {Component, Input, OnInit} from '@angular/core';
import {SalleProviderDasBoardDTO} from "../../models/salle-provider-das-board-dto.modell";
import {MusiqueProviderDashBoardDTO} from "../../models/musique-provider-dash-board-dto.model";
import {FormBuilder, FormGroup, Validators, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Component({
  selector: 'app-view-musique-service',
  templateUrl: './view-musique-service.component.html',
  styleUrls: ['./view-musique-service.component.css']
})
export class ViewMusiqueServiceComponent implements OnInit {
  @Input() musiqueDTO!: MusiqueProviderDashBoardDTO;
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
        nom: [{value: this.musiqueDTO.nom, disabled: true}],
      musique_type: [{value: this.musiqueDTO.musique_type, disabled: false}, Validators.required],
      }
    );
  }

  onSubmitForm(value: ɵTypedOrUntyped<any, ɵFormGroupValue<any>, any>) {
    console.log(value)
  }
}
