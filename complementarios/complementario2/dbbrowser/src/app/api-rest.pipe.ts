import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apiRest'
})
export class ApiRestPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
