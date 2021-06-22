import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdCardRoutingModule } from './birdcard-routing.module';
import { BirdCardComponent } from './birdcard/birdcard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BirdCardComponent,
  ],
  imports: [
    CommonModule,
    BirdCardRoutingModule,
    FontAwesomeModule,
    NgbModule,
    NgxChartsModule,
    FormsModule
  ],
  exports: [
    BirdCardComponent,
  ]
})
export class BirdCardModule { }
