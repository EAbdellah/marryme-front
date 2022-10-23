import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../user/services/user-service";
import {AuthenticationService} from "../../../user/services/authentication.service";
import {map, Observable} from "rxjs";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  title = 'MarryMe';
  public isAuthenticated$!: Observable<boolean> ;


  constructor(private userService: UserService, private authService: AuthenticationService) { }

  ngOnInit(): void {

  }

  public logout(): void {
    this.authService.logOut()
  }


  public isloged(): boolean {
    return this.authService.isUserLoggedIn();
  }




}
