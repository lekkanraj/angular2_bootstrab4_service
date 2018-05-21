import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datatable'
})
export class DatatablePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
