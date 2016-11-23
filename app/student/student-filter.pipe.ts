/*
**  Author: Elias Sundby Aukan
*/

import { Pipe, PipeTransform } from '@angular/core';

import { Student } from './index';

@Pipe({
    name: 'studentFilterPipe'
})
export class StudentFilterPipe implements PipeTransform {
  transform(students: Student[], field: string): any {
        if (!students) return students;
        let filter = field.toLocaleLowerCase();
        return filter ? students.filter(event=> event.username.toLocaleLowerCase().indexOf(filter) != -1) : students;
  }
}
