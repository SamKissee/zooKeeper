import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageSort'
})
export class AgeSortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
