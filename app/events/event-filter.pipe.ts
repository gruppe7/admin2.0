/*
**  Author: Elias Sundby Aukan
*/
import { Pipe, PipeTransform } from '@angular/core';

import { Event } from './index';

@Pipe({
    name: 'eventFilterPipe',
    pure: false
})
export class EventFilterPipe implements PipeTransform {
  transform(events: Event[], field: string): any {
        if (!events) return events;
        let filter = field.toLocaleLowerCase();
        return filter ? events.filter(event=> event.name.toLocaleLowerCase().indexOf(filter) != -1) : events;
  }
}
