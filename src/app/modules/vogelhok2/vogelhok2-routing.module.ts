import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vogelhok2Component } from './components/vogelhok2.component';

const routes: Routes = [
  { path: '', component: Vogelhok2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vogelhok2RoutingModule { }
