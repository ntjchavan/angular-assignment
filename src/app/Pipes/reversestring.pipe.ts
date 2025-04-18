import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversestring'
})
export class ReversestringPipe implements PipeTransform {

  transform(value: string): string {
    if(!value) 
        return '';


    return value.split('').reverse().join('');
  }

}
