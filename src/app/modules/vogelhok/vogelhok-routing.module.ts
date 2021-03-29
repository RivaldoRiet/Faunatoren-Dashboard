import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VogelhokComponent } from './components/vogelhok.component';

const routes: Routes = [
  { path: '', component: VogelhokComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VogelhokRoutingModule { }
