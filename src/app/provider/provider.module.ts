import { NgModule } from '@angular/core';
import { ProviderRoutingModule } from './provider-routing.module';
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import { DashbordProviderComponent } from './components/dashbord-provider/dashbord-provider.component';
import { RegisterProviderComponent } from '../core/components/register-provider/register-provider.component';
import { ViewSalleServiceComponent } from './components/view-salle-service/view-salle-service.component';
import { ViewMusiqueServiceComponent } from './components/view-musique-service/view-musique-service.component';
import { ViewMediaServiceComponent } from './components/view-media-service/view-media-service.component';
import { ViewMakeUpHairServiceComponent } from './components/view-make-up-hair-service/view-make-up-hair-service.component';
import { ViewTraiteurServiceComponent } from './components/view-traiteur-service/view-traiteur-service.component';
import { ViewServiceTraiteurServiceComponent } from './components/view-service-traiteur-service/view-service-traiteur-service.component';
import {CommonModule} from "@angular/common";
import { ViewAllreservationComponent } from './components/view-allreservation/view-allreservation.component';
import { ViewAllFermetureComponent } from './components/view-all-fermeture/view-all-fermeture.component';



@NgModule({
  declarations: [
    DashbordProviderComponent,
    ViewSalleServiceComponent,
    ViewMusiqueServiceComponent,
    ViewMediaServiceComponent,
    ViewMakeUpHairServiceComponent,
    ViewTraiteurServiceComponent,
    ViewServiceTraiteurServiceComponent,
    ViewAllreservationComponent,
    ViewAllFermetureComponent,
  ],
  imports: [
    ProviderRoutingModule,
    SharedModule,
    // FormsModule,
  ],
  entryComponents:[
    ViewSalleServiceComponent,
    ViewTraiteurServiceComponent
  ]
})
export class ProviderModule { }
