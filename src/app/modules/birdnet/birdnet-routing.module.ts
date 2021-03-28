import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirdnetComponent } from './components/birdnet.component';

const routes: Routes = [
  { path: '', component: BirdnetComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BirdnetRoutingModule { }
