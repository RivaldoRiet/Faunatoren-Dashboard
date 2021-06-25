import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverzichtRoutingModule } from './overzicht-routing.module';
import { OverzichtComponent } from './overzicht/overzicht.component';
import { ClarityModule } from '@clr/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardModule } from '../card/card.module';
import { BirdCardModule } from '../birdcard/birdcard.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    OverzichtComponent,
  ],
  imports: [
    CommonModule,
    OverzichtRoutingModule,
    ClarityModule,
    SharedModule,
    NgxChartsModule,
    FontAwesomeModule,
    NgbModule,
    CardModule,
    BirdCardModule,
    FormsModule,
  ], exports: [
    OverzichtComponent
  ]
})
export class OverzichtModule { }
