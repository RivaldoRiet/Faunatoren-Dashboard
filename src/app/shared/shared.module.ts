import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenLinkInNewWindowDirective } from './olinw.directive';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule
  ],

  declarations: [
    OpenLinkInNewWindowDirective,
    PageTitleComponent
  ],

  exports: [
    OpenLinkInNewWindowDirective,
    PageTitleComponent
  ]
})
export class SharedModule { }
