import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClarityModule } from '@clr/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainVideoComponent } from './components/main-video/main-video.component';
import { ListVideoComponent } from './components/list-video/list-video.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MainVideoComponent,
    ListVideoComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ClarityModule,
    SharedModule,
  ]
})
export class DashboardModule { }
