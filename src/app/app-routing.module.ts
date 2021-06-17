import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountModule } from './modules/account/account.module';
import { BirdnetModule } from './modules/birdnet/birdnet.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { FaunatorenModule } from './modules/faunatoren/faunatoren.module';
import { StatisticsModule } from './modules/statistics/statistics.module';
import { VogelhokModule } from './modules/vogelhok/vogelhok.module';
import {Router} from '@angular/router';
import { Vogelhok2Module } from './modules/vogelhok2/vogelhok2.module';
import { OverzichtModule } from './modules/overzicht/overzicht.module';

const routes: Routes = [
  { path: '', loadChildren: () => OverzichtModule },
  { path: 'overzicht', loadChildren: () => OverzichtModule },
  { path: 'statistieken', loadChildren: () => StatisticsModule },
  { path: 'vogelherkenning', loadChildren: () => BirdnetModule },
  { path: 'toren', loadChildren: () => FaunatorenModule },
  { path: 'vogelhok', loadChildren: () => VogelhokModule },
  { path: 'vogelhok2', loadChildren: () => Vogelhok2Module },
  { path: 'account', loadChildren: () => AccountModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private route:Router){} 
  
  	go(){
		this.route.navigate(['/statistieken']); // navigate to other page
	}
 }
