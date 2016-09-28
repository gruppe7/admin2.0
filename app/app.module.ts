import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { EventsComponent } from './events/events.component';

import { LockerDetailComponent } from './locker/locker-detail.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EventsComponent,
    LockerDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
