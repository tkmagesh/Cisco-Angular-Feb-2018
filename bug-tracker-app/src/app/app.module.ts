import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BugOperationsService } from './bugTracker/services/bugOperations.service';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugStatsComponent } from './bugTracker/views/bugStats/bugStats.component';

import { TrimTextPipe } from './bugTracker/pipes/trimText.pipe';
import { SortPipe } from './bugTracker/pipes/sort.pipe';




@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , BugStatsComponent
    , TrimTextPipe
    , SortPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  	BugOperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
