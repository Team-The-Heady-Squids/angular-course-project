import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduceTextLength'
})
export class ReduceTextLengthPipe implements PipeTransform {

  transform(value: string, length: number): string {
    if (value.length >= length) {
      return value.slice(0, length) + '...';
    }
    return value;
  }

}
