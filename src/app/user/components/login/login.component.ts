import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {Observable} from "rxjs";
import {UserService} from "../../services/user-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading =false;
  loginForm!: FormGroup;
  usernameCtrl!: FormControl;
  pwdCtrl!: FormControl;


  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) { }


  ngOnInit(): void {
    this.initMainForm();
  }

  private initMainForm(): void {
    this.usernameCtrl = this.formBuilder.control('',Validators.required);
    this.pwdCtrl = this.formBuilder.control('',Validators.required);

    this.loginForm = this.formBuilder.group({
      username:this.usernameCtrl,
      password:this.pwdCtrl
    })
  }


  authenticateTheUser() {
    console.log(JSON.stringify(this.loginForm.value))
  }
}
