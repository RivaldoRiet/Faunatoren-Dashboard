import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingRoutingModule } from './loading-routing.module';
import { LoadingComponent } from './loading/loading';


@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    LoadingRoutingModule
  ],
  exports: [
    LoadingComponent,
  ],
})
export class LoadingModule { }
