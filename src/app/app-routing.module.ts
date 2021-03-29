import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountModule } from './modules/account/account.module';
import { BirdnetModule } from './modules/birdnet/birdnet.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { FaunatorenModule } from './modules/faunatoren/faunatoren.module';
import { StatisticsModule } from './modules/statistics/statistics.module';
import { VogelhokModule } from './modules/vogelhok/vogelhok.module';

const routes: Routes = [
  { path: 'overzicht', loadChildren: () => DashboardModule },
  { path: 'statistieken', loadChildren: () => StatisticsModule },
  { path: 'vogelherkenning', loadChildren: () => BirdnetModule },
  { path: 'toren', loadChildren: () => FaunatorenModule },
  { path: 'vogelhok', loadChildren: () => VogelhokModule },
  { path: 'account', loadChildren: () => AccountModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
