/*
**  Auhtor: Elias S. Aukan
**  This is the component that lists all the Events.
**  No admin functionality implemented here.
*/

import { Component, OnInit } from '@angular/core';

import { EventService } from './event.service'
import { Event } from './event';
import { EventAttendComponent } from './event-attend.component'

 @Component({
   selector: 'events',
   template: `
    <h3>Kommende eventer: </h3>
    <ul class="eventer">
    <li *ngFor="let event of events" [class.selected]="event===selectedEvent" (click)="onSelect(event)">
      <span class="badge"> {{event.eventId}}   </span>{{event.name}}
    </li>
    </ul>
    <div id ="under" *ngIf="selectedEvent">
      <h2> {{selectedEvent.name}}   </h2>
      <h3> {{selectedEvent.description}}</h3>
      <ul><li id="link" (click)="onAttend()"> påmelding </li></ul>

      <div id="attend" *ngIf="selectAttend">
      <event-attend></event-attend>

    </div>
    `
 })
 export class EventsComponent implements OnInit{
   events: Event[];
   selectedEvent: Event;
   selectAttend = false;

   constructor(private eventService: EventService){

   }


   onAttend(): void{
      this.selectAttend = true;
   }

   onSelect(event: Event): void{
     this.selectedEvent = event;
     this.selectAttend = false;
   }

   ngOnInit(): void{
     this.getEvents();
   }

   getEvents(): void{
      this.eventService.getEvents().then(events => this.events = events);
   }


 }
