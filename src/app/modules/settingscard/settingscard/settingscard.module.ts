import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingscardRoutingModule } from './settingscard-routing.module';
import { SettingscardComponent } from './settingscard/settingscard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { OverzichtModule } from '../../overzicht/overzicht.module';


@NgModule({
  declarations: [
    SettingscardComponent
  ],
  imports: [
    CommonModule,
    SettingscardRoutingModule,
    FontAwesomeModule,
    NgbModule,
    NgxChartsModule,
    FormsModule,
    OverzichtModule,
  ]
})
export class SettingscardModule { }
