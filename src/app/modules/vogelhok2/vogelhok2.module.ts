import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VogelhokRoutingModule } from './vogelhok-routing.module2';
import { VogelhokComponent } from './components/vogelhok.component';
import { ClarityModule } from '@clr/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxTimelineAlbeModule } from 'ngx-timeline-albe';

@NgModule({
  declarations: [VogelhokComponent],
  imports: [
    CommonModule,
    VogelhokRoutingModule,
    ClarityModule,
    SharedModule,
    NgxChartsModule,
    NgxTimelineAlbeModule
  ]
})
export class VogelhokModule2 { }
