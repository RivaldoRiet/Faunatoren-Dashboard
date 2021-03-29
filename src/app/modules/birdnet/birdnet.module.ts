import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BirdnetRoutingModule } from './birdnet-routing.module';
import { BirdnetComponent } from './components/birdnet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [BirdnetComponent],
  imports: [
    CommonModule,
    BirdnetRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule
  ]
})
export class BirdnetModule { }
