import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable, tap} from "rxjs";
import {RequestRegistrationProviderDTO} from "../../model/request-registration-provider-dto.model";
import {AdminServiceService} from "../../services/admin-service.service";
import {MatTable} from "@angular/material/table";
import {HttpErrorResponse} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datasource: RequestRegistrationProviderDTO[] = []
  displayedColumns: string[] = ['nom', 'ntva', 'nentreprise', 'email', 'fristName','lastName','accepted','refused'];
  @ViewChild(MatTable) table: MatTable<RequestRegistrationProviderDTO> | undefined;


  constructor(private adminService: AdminServiceService) { }


  ngOnInit(): void {
    this.adminService.getAllRequest().pipe(
      tap(data => {
          console.log(data)
          this.datasource = data
        console.log(data)
        }
      )).subscribe();
  }

  deleteTicket(item :RequestRegistrationProviderDTO) {
    this.sendDecision(false,item);
    const index = this.datasource.indexOf(item);
    console.log(index)
    this.datasource.splice(index, 1);
    // @ts-ignore
    this.table.renderRows();

  }

  acceptTicket(item: RequestRegistrationProviderDTO) {
    this.sendDecision(true,item);
    const index = this.datasource.indexOf(item);
    console.log(index)
    this.datasource.splice(index, 1);
    // @ts-ignore
    this.table.renderRows();

  }

  sendDecision(decision:boolean,item:RequestRegistrationProviderDTO){
    this.adminService.sendDecision(decision,item.email, item.nom)
      .subscribe( {
        // complete: () => {  },
        error: (errorResponse: HttpErrorResponse) => {
          console.log(errorResponse)},
        // next:()=>{}

      })
  }

}
