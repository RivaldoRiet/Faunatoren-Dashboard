import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountModule } from './modules/account/account.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { StatisticsModule } from './modules/statistics/statistics.module';

const routes: Routes = [
  { path: 'overzicht', loadChildren: () => DashboardModule },
  { path: 'statistieken', loadChildren: () => StatisticsModule },
  { path: 'account', loadChildren: () => AccountModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
