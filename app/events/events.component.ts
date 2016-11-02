/*
**  Auhtor: Elias S. Aukan
**  This is the component that lists all the Events.
**  No admin functionality implemented here.
*/

import { Component, OnInit } from '@angular/core';

import { Event, EventAttendComponent } from './index';
import { EventService } from './event.service'; //have to go around the barrel to avoid errors

 @Component({
   selector: 'events',
   templateUrl: 'app/events/events.component.html'
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
