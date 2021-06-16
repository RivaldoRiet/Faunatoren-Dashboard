import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BirdnetComponent } from './modules/birdnet/components/birdnet.component';
import { BirdnetService } from './core/services/birdnet.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { WikipediaService } from './core/services/wikipedia.service';
import { CivityService } from './core/services/civity.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [BirdnetService, WikipediaService, CivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
