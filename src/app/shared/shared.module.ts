import {Directive, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./material.module";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IgxModule} from "./igx.module";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FilterServicePipe} from "./pipes/filter-service.pipe";
import {DisabledControlDirective} from "./directives/disabled-control-directive.directive";



@NgModule({

  declarations: [
    FilterServicePipe,
    DisabledControlDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    IgxModule,
    Ng2SearchPipeModule,
  ],
  exports:[
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    IgxModule,
    Ng2SearchPipeModule,
    FilterServicePipe,
    FormsModule,
    DisabledControlDirective
  ]
})
export class SharedModule { }
