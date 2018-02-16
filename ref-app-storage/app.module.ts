import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BugOperationsService } from './bugTracker/services/bugOperations.service';
import { BugStorageService } from './bugTracker/services/bugStorage.service';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugStatsComponent } from './bugTracker/views/bugStats/bugStats.component';
import { BugEditComponent } from './bugTracker/views/bugEdit/bugEdit.component';


import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';

import { UtilsModule } from './utils/utils.module';


@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , BugStatsComponent
    , BugEditComponent
    , ClosedCountPipe
  ],
  imports: [
    BrowserModule
    , UtilsModule
  ],
  providers: [
  	BugOperationsService
    , BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
