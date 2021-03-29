import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BirdnetRoutingModule } from './birdnet-routing.module';
import { BirdnetComponent } from './components/birdnet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { FileDragNDropDirective } from './components/file-drag-n-drop.directive';
import {MatIconModule} from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [BirdnetComponent, FileDragNDropDirective],
  imports: [
    CommonModule,
    BirdnetRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    MatIconModule,
    MatSnackBarModule,
    NgxChartsModule
  ]
})
export class BirdnetModule { }
