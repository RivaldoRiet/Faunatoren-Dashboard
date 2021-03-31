import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaunatorenComponent } from './faunatoren/faunatoren.component';


const routes: Routes = [
  { path: '', component: FaunatorenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaunatorenRoutingModule { }

