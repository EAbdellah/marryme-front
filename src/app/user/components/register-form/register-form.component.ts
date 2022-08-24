import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {confirmEqualValidator} from "../../validators/confirm-equal.validator";
import {map, Observable, startWith, tap} from "rxjs";
import {AtLeast} from "../../validators/at-least.valisator";
import {UserService} from "../../services/user-service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  loading =false;
  mainForm!: FormGroup;

  personalInfoForm!: FormGroup;
  contactPreferenceCtrl!: FormControl;
  // phoneCtrl!: FormControl;

  emailForm!: FormGroup;
  emailCtrl!: FormControl;
  confirmEmailCtrl!: FormControl;

  loginInfoForm!: FormGroup;
  passwordCtrl!: FormControl;
  confirmPasswordCtrl!: FormControl;

  showEmailError$!: Observable<boolean>;
  showPasswordError$!: Observable<boolean>;


  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.initFormControls();
    this.initMainForm();
    this.initFormObservables();
  }

  private initMainForm(): void {
    this.mainForm = this.formBuilder.group({
      firstName: this.personalInfoForm.get('firstName'),
      lastName: this.personalInfoForm.get('lastName'),
      country: this.personalInfoForm.get('country'),
      city: this.personalInfoForm.get('city'),
      postalCode: this.personalInfoForm.get('postalCode'),
      street: this.personalInfoForm.get('street'),
      houseNumber: this.personalInfoForm.get('houseNumber'),
      box: this.personalInfoForm.get('box'),
      phone:  this.personalInfoForm.get('phone'),
      email: this.emailForm.get('email'),
      password: this.loginInfoForm.get('password'),
      contactPreference: this.contactPreferenceCtrl




      // personalInfo: this.personalInfoForm,
      // contactPreference: this.contactPreferenceCtrl,
      // email: this.emailForm,
      // // phone: this.phoneCtrl,
      // loginInfo: this.loginInfoForm
    });
  }

  private initFormControls(): void {
    // this.phoneCtrl = this.formBuilder.control(['',Validators.required, Validators.minLength(10),
    //   Validators.maxLength(10)]);

    this.personalInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      street: ['', Validators.required],
      houseNumber: ['', Validators.required],
      box: [''],
      phone:['',[Validators.required, Validators.minLength(10),
        Validators.maxLength(10)]]
    });

    this.contactPreferenceCtrl = this.formBuilder.control('email');

    this.emailCtrl = this.formBuilder.control('',Validators.email);

    this.confirmEmailCtrl = this.formBuilder.control('',Validators.email);

    this.emailForm = this.formBuilder.group({
      email: this.emailCtrl,
      confirm: this.confirmEmailCtrl
    },{
      validators: [confirmEqualValidator('email','confirm')],
      updateOn:"blur"
    });


      // .addValidators([Validators.required, Validators.minLength(10),
      // Validators.maxLength(10)]);

    this.passwordCtrl = this.formBuilder.control('',[ Validators.required,AtLeast()]);

    this.confirmPasswordCtrl = this.formBuilder.control('', Validators.required);

    this.loginInfoForm = this.formBuilder.group({
      password: this.passwordCtrl,
      confirmPassword: this.confirmPasswordCtrl
    },{
      validators: [confirmEqualValidator('password','confirmPassword')],
      updateOn:"blur"
    });

  }

  private initFormObservables() {

    this.showEmailError$ = this.emailForm.statusChanges.pipe(
      map(status =>status==='INVALID' &&
        this.emailCtrl.value &&
        this.confirmEmailCtrl.value));

    this.showPasswordError$ = this.loginInfoForm.statusChanges.pipe(
      map(status => status === 'INVALID' &&
        this.passwordCtrl.value &&
        this.confirmPasswordCtrl.value
      )
    );


  }

  private setEmailValidators(showEmailCtrl: boolean) {
    if (showEmailCtrl) {
      this.emailCtrl.addValidators([
        Validators.required,
        Validators.email]);
      this.confirmEmailCtrl.addValidators([
        Validators.required,
        Validators.email
      ]);
    } else {
      this.emailCtrl.clearValidators();
      this.confirmEmailCtrl.clearValidators();
    }
    this.emailCtrl.updateValueAndValidity();
    this.confirmEmailCtrl.updateValueAndValidity();
  }

  // private setPhoneValidators(showPhoneCtrl: boolean) {
  //   if (showPhoneCtrl) {
  //     this.phoneCtrl.addValidators([
  //       Validators.required,
  //       Validators.minLength(10),
  //       Validators.maxLength(10)
  //     ]);
  //   } else {
  //     this.phoneCtrl.clearValidators();
  //   }
  //   this.phoneCtrl.updateValueAndValidity();
  // }

  onSubmitForm() {
    this.loading = true;
    this.userService.saveUserInfo(this.mainForm.value).pipe(
      tap(saved => {
        this.loading = false;
        if (saved) {
          this.resetForm();
        } else {
          console.error('Echec de l\'enregistrement');
        }
      })
    ).subscribe();
  }

  private resetForm() {
    this.mainForm.reset();
    this.contactPreferenceCtrl.patchValue('email');
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
