/*
**  Author: Elias Sundby Aukan
*/
import { Pipe, PipeTransform } from '@angular/core';

import { Member } from './index';

@Pipe({
    name: 'memberFilterPipe'
})
export class MemberFilterPipe implements PipeTransform {
  transform(members: Member[], field: string): any {
        if (!members) return members;
        let filter = field.toLocaleLowerCase();
        return filter ? members.filter(event=> event.username.toLocaleLowerCase().indexOf(filter) != -1) : members;
  }
}
