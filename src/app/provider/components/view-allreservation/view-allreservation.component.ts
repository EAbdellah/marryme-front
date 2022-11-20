import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {ReservationProviderDashBoardDTO} from "../../models/reservation-provider-dash-board-dto.model";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {RequestRegistrationProviderDTO} from "../../../admin/model/request-registration-provider-dto.model";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ProviderService} from "../../services/provider.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-view-allreservation',
  templateUrl: './view-allreservation.component.html',
  styleUrls: ['./view-allreservation.component.css']
})
export class ViewAllreservationComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['reservation_date', 'ticket', 'formule_Name', 'price', 'status','accepted','refused'];
  @ViewChild(MatTable) table: MatTable<ReservationProviderDashBoardDTO> | undefined;
  @Input() allReservation: ReservationProviderDashBoardDTO[] = [];


  // displayedColumns: string[] = ['reservation_date', 'ticket', 'formule_Name', 'price','status','accepted'];
  // dataSource!: MatTableDataSource<ReservationProviderDashBoardDTO>;
  // allReservations: ReservationProviderDashBoardDTO[] = [];
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  constructor(private  providerService:ProviderService) {
  }

  ngOnInit(): void {

    // this.providerService.getAllReservation().subscribe(
    //   data=>
    //   {this.dataSource = new MatTableDataSource(data)
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //
    //   }
    // )
    // this.dataSource = new MatTableDataSource(this.allReservations);


  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }


  deleteTicket(item :ReservationProviderDashBoardDTO) {
    const index = this.allReservation.indexOf(item);
    console.log(index)
    this.sendDecision(false,item.ticket||"");
    item.status='NOT_ACCEPTED'

    this.allReservation.splice(index, 1);
    this.allReservation.push(item)

    // @ts-ignore
    this.table.renderRows();

  }

  acceptTicket(item: ReservationProviderDashBoardDTO) {
    const index = this.allReservation.indexOf(item);
    this.sendDecision(true,item.ticket||"");
    item.status='ACCEPTED'
    console.log(index)
    this.allReservation.splice(index, 1);
    this.allReservation.push(item)
    // @ts-ignore
    this.table.renderRows();

  }


  sendDecision(decision:boolean,ticket:string){
    this.providerService.sendDecision(decision,ticket)
      .subscribe( {
        // complete: () => {  },
        error: (errorResponse: HttpErrorResponse) => {
          console.log(errorResponse)},
        // next:()=>{}

      })
  }

}
