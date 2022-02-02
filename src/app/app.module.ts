import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpinnerViewComponent } from './spinner-view/spinner-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { SpinnerServiceService } from './spinner-service.service';
import { MyLibModule } from 'projects/my-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerViewComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    RouterModule,
    MyLibModule
  ],
  providers: [SpinnerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
