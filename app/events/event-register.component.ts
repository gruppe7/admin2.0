import  { Component } from '@angular/core';

import { Event, EventService } from './index';

@Component({
  selector: 'event-register',
  templateUrl: 'app/events/event-register.component.html'

})
export class EventRegisterComponent{
  model = new Event();
  message ="";
  loading = false;

  constructor(private eventService: EventService){

  }

  onRegisterEvent(){
    if(this.model.name != "" || this.model.name != null){
      this.eventService.newEvent(this.model)
        .subscribe(
          res=>{
            this.loading = false;
            this.message = "Event opprettet"
          },
          error =>{
            this.message = "noe gikk galt ved innlasting av studenter";
            this.loading = false;
          }
        )
    }else{
      this.message = "Velg et gyldig navn";
    }
  }
}
