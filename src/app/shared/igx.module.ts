import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IgxAvatarModule,
  IgxButtonGroupModule,
  IgxFilterModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxListModule, IgxRippleModule
} from "igniteui-angular";



@NgModule({
  exports: [
    IgxAvatarModule,
    IgxFilterModule,
    IgxIconModule,
    IgxListModule,
    IgxInputGroupModule,
    IgxButtonGroupModule,
    IgxRippleModule,
  ]
})
export class IgxModule { }
