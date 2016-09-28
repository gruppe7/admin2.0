import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { EventsComponent } from './events/events.component';
import { LockerComponent } from './locker/locker.component';
import { LockerDetailComponent } from './locker/locker-detail.component';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    EventsComponent,
    LockerComponent,
    LockerDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
