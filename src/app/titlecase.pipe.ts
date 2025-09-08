import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string):string {
    if(!value) return '';
    return value.split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
  }

}
