import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './components/statistic.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { ClarityModule } from '@clr/angular';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [StatisticComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    ClarityModule,
    SharedModule
  ]
})
export class StatisticsModule { }
