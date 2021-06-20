import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoutingModule } from './card-routing.module';
import { CardComponent, CardModalContent } from './card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    CardComponent,
    CardModalContent,
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    FontAwesomeModule,
    NgbModule,
    NgxChartsModule
  ],
  exports: [
    CardComponent,
  ],
  entryComponents: [
    CardModalContent
  ]
})
export class CardModule { }
