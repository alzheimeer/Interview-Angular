import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchuser'
})
export class SearchuserPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
