import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BirdnetRoutingModule } from './birdnet-routing.module';
import { BirdnetComponent } from './components/birdnet.component';


@NgModule({
  declarations: [BirdnetComponent],
  imports: [
    CommonModule,
    BirdnetRoutingModule
  ]
})
export class BirdnetModule { }
