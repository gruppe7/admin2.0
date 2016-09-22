//Auhtor: Elias S. Aukan

import { Component, OnInit } from '@angular/core';

import { EventService } from './event.service'
import { Event } from './event';

 @Component({
   selector: 'events',
   template: `
    <h2>Kommende eventer: </h2>
    <ul class="eventer">
    <li> her kommer det en liste over eventer </li>
    </ul>
    `
 })
 export class EventsComponent implements OnInit{
   events: Event[];
   selectedEvent: Event;

   constructor(private eventService: EventService){

   }



   onSelect(event: Event): void{
     this.selectedEvent = event;
   }

   ngOnInit(): void{
     this.getEvents();
   }

   getEvents(): void{
      this.eventService.getEvents().then(events => this.events = events);
   }


 }
