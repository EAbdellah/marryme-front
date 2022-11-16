import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../user/services/authentication.service";
import {catchError, map, Observable, of, tap, throwError} from "rxjs";
import {UserService} from "../../../user/services/user-service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {HeaderType} from "../../../enum/header-type.enum";
import {User} from "../../../user/models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  loginForm!: FormGroup;
  usernameCtrl!: FormControl;
  pwdCtrl!: FormControl;
  showLoading!: boolean;


  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService,private userService: UserService, private router: Router) {
  }


  ngOnInit(): void {
    this.initMainForm();
  }

  private initMainForm(): void {
    this.usernameCtrl = this.formBuilder.control('', Validators.required);
    this.pwdCtrl = this.formBuilder.control('', Validators.required);

    this.loginForm = this.formBuilder.group({
      username: this.usernameCtrl,
      password: this.pwdCtrl
    })
  }


  authenticateTheUser() {
    // console.log(JSON.stringify(this.loginForm.value))
    // this.userService.login(this.usernameCtrl.value,this.pwdCtrl.value).pipe(tap(
    //
    //
    //
    //   saved => {
    //     console.log(this.loginForm.value)
    //     this.loading = false;
    //     if (!saved) {
    //       console.error('Echec du login');
    //     }
    //   }
    //   )
    // ).subscribe();
    // this.router.navigateByUrl("/marryme")
    //
    //0
    //


    this.showLoading = true;

    this.authService.login(this.usernameCtrl.value, this.pwdCtrl.value)
      .subscribe({
        // complete: () => {  },
        error: (errorResponse: HttpErrorResponse) => {
          console.log(errorResponse)
          this.showLoading = false;

        },
        next: (response: HttpResponse<User>) => {
          const token = response.headers.get(HeaderType.JWT_TOKEN);
          console.log("****response: "+JSON.stringify(response.headers.keys()))
          console.log("****body: "+JSON.stringify(response.body))

          console.log("****token: "+token)
          // @ts-ignore
          this.authService.saveToken(token);
          // @ts-ignore
          this.authService.addUserToLocalCache(response.body);
          // @ts-ignore

          if (response.body.role=="ROLE_USER"){
          this.router.navigateByUrl('/marryme');
          this.showLoading = false;

        }else { // @ts-ignore
            if( response.body.role=="ROLE_PRESTATAIRE_ADMIN")
                    {
                          this.router.navigateByUrl('/provider');
                          this.showLoading = false;

                      }else { // @ts-ignore
              if(response.body.role=="ROLE_ADMIN"){
                            this.router.navigateByUrl('/admin');
                            this.showLoading = false;
                          }
            }
          }


        },
      });


  }

  click() {
    this.router.navigate(['/redirectRegistration'],{skipLocationChange: true})
  }
}
