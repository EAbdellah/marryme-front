import { Component, OnInit } from '@angular/core';
import {AbstractControl, Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {confirmEqualValidator} from "../../../user/validators/confirm-equal.validator";
import {AtLeast} from "../../../user/validators/at-least.valisator";
import {map, Observable, tap} from "rxjs";
import {ProviderService} from "../../services/provider.service";

@Component({
  selector: 'app-register-provider',
  templateUrl: './register-provider.component.html',
  styleUrls: ['./register-provider.component.css']
})
export class RegisterProviderComponent implements OnInit {
  firstFormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],

  });
  //
  //
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });

  loading =false;
  mainForm!: FormGroup;

  emailForm!: FormGroup;
  personalInfoForm!: FormGroup;
  locationInfoForm!: FormGroup;
  credentialInfoForm!: FormGroup;
  serviceInfoForm!: FormGroup;
  credentialForm!: FormGroup;

  contactPreferenceCtrl!: FormControl;
  // phoneCtrl!: FormControl;

  emailCtrl!: FormControl;
  confirmEmailCtrl!: FormControl;

  loginInfoForm!: FormGroup;
  passwordCtrl!: FormControl;
  confirmPasswordCtrl!: FormControl;

  showEmailError$!: Observable<boolean>;
  showPasswordError$!: Observable<boolean>;

  isEditable = true;

  constructor(private formBuilder: FormBuilder, private providerService:ProviderService) { }

  ngOnInit(): void {
    this.initFormControls();
    this.initFormObservables();

  }

  private  initMainForm(){
    this.mainForm = this.formBuilder.group({
      firstName: this.personalInfoForm.get('firstName'),
      lastName: this.personalInfoForm.get('lastName'),
      phone: this.personalInfoForm.get('phone'),
      country: this.locationInfoForm.get('country'),
      city: this.locationInfoForm.get('city'),
      postalCode: this.locationInfoForm.get('postalCode'),
      street: this.locationInfoForm.get('street'),
      houseNumber: this.locationInfoForm.get('houseNumber'),
      box: this.locationInfoForm.get('box'),
      name:  this.serviceInfoForm.get('name'),
      n_entreprise:  this.serviceInfoForm.get('n_entreprise'),
      n_tva:  this.serviceInfoForm.get('n_tva'),
      entreprise_phone:  this.serviceInfoForm.get('entreprise_phone'),
      password:  this.credentialForm.controls['passChild'].get('password'),
      email_entreprise:  this.credentialForm.controls['emailChild'].get('email'),
    });
  }

  private initFormControls(): void {
    this.personalInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone:['',[Validators.required, Validators.minLength(10),
        Validators.maxLength(10)]]
    });

    this.locationInfoForm = this.formBuilder.group({
      country: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      street: ['', Validators.required],
      houseNumber: ['', Validators.required],
      box: [''],
    });



    this.serviceInfoForm = this.formBuilder.group({
      name: ['', Validators.required],
      n_entreprise: ['', Validators.required],
      n_tva: ['', Validators.required],
      entreprise_phone: ['',[Validators.required, Validators.minLength(10),
        Validators.maxLength(10)]],
    });

    this.emailCtrl = this.formBuilder.control('',[Validators.email, Validators.required]);
    this.confirmEmailCtrl = this.formBuilder.control('',[Validators.email, Validators.required]);
    this.passwordCtrl = this.formBuilder.control('',[ Validators.required,AtLeast()]);
    this.confirmPasswordCtrl = this.formBuilder.control('', Validators.required);



    this.credentialForm = this.formBuilder.group({
      emailChild: this.formBuilder.group({
        email: this.emailCtrl,
        confirm: this.confirmEmailCtrl,
      }, {
        validators: [confirmEqualValidator('email', 'confirm')],
        updateOn: "blur"
      }),
      passChild: this.formBuilder.group({
        password: this.passwordCtrl,
        confirmPassword: this.confirmPasswordCtrl,
      }, {
        validators: [confirmEqualValidator('password', 'confirmPassword')],
        updateOn: "blur"
      })
    });

  }

  private initFormObservables() {

    this.showEmailError$ = this.credentialForm.controls['emailChild'].statusChanges.pipe(
      tap(x=>console.log("true")),
      map(status =>status==='INVALID' &&
        this.emailCtrl.value &&
        this.confirmEmailCtrl.value));

    this.showPasswordError$ = this.credentialForm.controls['passChild'].statusChanges.pipe(
      map(status => status === 'INVALID' &&
        this.passwordCtrl.value &&
        this.confirmPasswordCtrl.value
      )
    );


  }

  private resetForm() {
    this.mainForm.reset();
  }

  onSubmit() {

    this.initMainForm() ;

    this.providerService.saveProviderInfo(this.mainForm.value).pipe(
      tap(saved => {
        console.log(this.mainForm.value)
        this.loading = false;
        if (saved) {
          this.resetForm();
        } else {
          console.error('Echec de l\'enregistrement');
        }
      })
    ).subscribe();

    // this.router.navigateByUrl("/login")
    console.log(this.mainForm)
  }


  getFormControlErrorText(ctrl: AbstractControl) {
    if (ctrl.hasError('required')) {
      return 'Ce champ est requis';
    } else if (ctrl.hasError('email')) {
      return 'Merci d\'entrer une adresse mail valide';
    } else if (ctrl.hasError('minlength')) {
      return 'Ce numéro de téléphone ne contient pas assez de chiffres';
    } else if (ctrl.hasError('maxlength')) {
      return 'Ce numéro de téléphone contient trop de chiffres';
    } else if (ctrl.hasError('no-8-char')) {
      return 'contient moins de 8 charactere';
    } else if (ctrl.hasError('no-nombre-min-maj')) {
      return 'ne contient ni nombre, majuscule et miniscule';
    }else if (ctrl.hasError('no-nombre-maj')) {
      return 'ne contient ni nombre ni majuscule';
    }else if (ctrl.hasError('no-nombre-min')) {
      return 'ne contient ni un nombre ni miniscule';
    }else if (ctrl.hasError('no-min-maj')) {
      return 'ne contient ni un majuscule ni miniscule';
    }else if (ctrl.hasError('no-nombre')) {
      return 'ne contient pas de nombre';
    }else if (ctrl.hasError('no-maj')) {
      return 'ne contient pas de majuscule';
    }else if (ctrl.hasError('no-min')) {
      return 'ne contient pas de miniscule';
    } else {
      return 'Ce champ contient une erreur';
    }
  }



}
