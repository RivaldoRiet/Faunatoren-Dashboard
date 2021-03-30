import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './components/statistic.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { ClarityModule } from '@clr/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [StatisticComponent, CardComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    ClarityModule,
    SharedModule,
    NgxChartsModule
  ]
})
export class StatisticsModule { }
