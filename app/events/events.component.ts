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
   loading = false;
   message = "";


   constructor(private eventService: EventService){

   }


   onAttend(): void{
      this.selectAttend = true;
   }

   onSelect(event: Event): void{
     this.selectedEvent = event;
     this.selectAttend = false;
   }

   ngOnInit(){

       this.loading=true;
       this.eventService.getEvents()
         .subscribe(
           res=>{
             this.events = res;
             this.loading = false;
           },
           error =>{
             this.message = "noe gikk galt ved innlasting av studenter";
             this.loading = false;
           }
         )

   }

   


 }
