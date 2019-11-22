import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
      let currentDate = (new Date()).getTime();
      let birthDate = (new Date(value)).getTime();
      let timeDiff = currentDate - birthDate;
      let age = (new Date(timeDiff)).getFullYear() - 1970;

      return age;
  }

}
