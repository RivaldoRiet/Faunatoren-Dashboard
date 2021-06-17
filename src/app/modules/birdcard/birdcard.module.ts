import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdCardRoutingModule } from './birdcard-routing.module';
import { BirdCardComponent, BirdCardModalContent } from './birdcard/birdcard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    BirdCardComponent,
    BirdCardModalContent,
  ],
  imports: [
    CommonModule,
    BirdCardRoutingModule,
    FontAwesomeModule,
    NgbModule,
    NgxChartsModule
  ],
  exports: [
    BirdCardComponent,
  ],
  entryComponents: [
    BirdCardModalContent
  ]
})
export class BirdCardModule { }
