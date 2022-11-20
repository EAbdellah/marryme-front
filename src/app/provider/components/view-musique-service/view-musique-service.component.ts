import {Component, Input, OnInit} from '@angular/core';
import {SalleProviderDasBoardDTO} from "../../models/salle-provider-das-board-dto.modell";
import {MusiqueProviderDashBoardDTO} from "../../models/musique-provider-dash-board-dto.model";
import {FormBuilder, FormGroup, Validators, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";
import {ProviderService} from "../../services/provider.service";
import {first} from "rxjs";
import {MediaProviderDashBoardDTO} from "../../models/media-provider-dash-board-dto.model";

@Component({
  selector: 'app-view-musique-service',
  templateUrl: './view-musique-service.component.html',
  styleUrls: ['./view-musique-service.component.css']
})
export class ViewMusiqueServiceComponent implements OnInit {
  @Input() musiqueDTO!: MusiqueProviderDashBoardDTO;
  form!: FormGroup;

  constructor(private fb: FormBuilder, private providerService:ProviderService) { }

  ngOnInit(): void {

    this.initForm()
    this.providerService.getOwnMusique().pipe(first()).subscribe(
      data=>{
        this.setForm(data)
      })
  }

  initForm() {
    this.form = this.fb.group({
      service_id: [{value: 0, disabled: false}],
      nom: [{value: "", disabled: true}],
      musique_type: [{value: "", disabled: false}, Validators.required],

    });
  }

  setForm(data: MusiqueProviderDashBoardDTO ): void {
    this.form.patchValue({'service_id': data.service_id})
    this.form.patchValue({'nom': data.nom})
    this.form.patchValue({'musique_type': data.musique_type})

  };

  onSubmitForm(form: MusiqueProviderDashBoardDTO) {
    this.providerService.updateServiceMusique(form).pipe(first()).subscribe(
      data=>{
      })  }
}
