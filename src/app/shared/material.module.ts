import {NgModule} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from "@angular/material/card";
import {MatList, MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import { MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MatMenuModule} from '@angular/material/menu';
import {MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatDatepickerModule, MatDatepickerInput} from "@angular/material/datepicker";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";
import 'moment/locale/fr';
import {MatTabsModule} from "@angular/material/tabs";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import {MatChipsModule} from "@angular/material/chips";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSelectModule} from "@angular/material/select";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  providers: [
  {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
  {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
],
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatGridListModule,
    MatTooltipModule,
    MatTableModule,
    MatChipsModule,
    MatSidenavModule,
    MatStepperModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule

  ]
}) export class MaterialModule{}
