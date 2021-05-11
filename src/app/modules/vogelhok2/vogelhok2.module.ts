import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ClarityModule } from '@clr/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxTimelineAlbeModule } from 'ngx-timeline-albe';
import { Vogelhok2RoutingModule } from './vogelhok2-routing.module';
import { Vogelhok2Component } from './components/vogelhok2.component';

@NgModule({
  declarations: [Vogelhok2Component],
  imports: [
    CommonModule,
    Vogelhok2RoutingModule,
    ClarityModule,
    SharedModule,
    NgxChartsModule,
    NgxTimelineAlbeModule
  ]
})
export class Vogelhok2Module { }
