import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingscardComponent } from './settingscard/settingscard.component';

const routes: Routes = [
  { path: '', component: SettingscardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingscardRoutingModule { }
