import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverzichtComponent } from './overzicht/overzicht.component';

const routes: Routes = [
  { path: '', component: OverzichtComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverzichtRoutingModule { }
