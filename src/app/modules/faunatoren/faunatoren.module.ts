import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaunatorenRoutingModule } from './faunatoren-routing.module';
import { ClarityModule } from '@clr/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { FaunatorenComponent } from './faunatoren/faunatoren.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [FaunatorenComponent],
  imports: [
    CommonModule,
    FaunatorenRoutingModule,
    ClarityModule,
    SharedModule,
    NgxChartsModule,
  ]
})
export class FaunatorenModule { }
