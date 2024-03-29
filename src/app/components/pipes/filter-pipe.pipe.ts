import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value:Car[], filterText:string): Car[] {
    filterText = filterText?filterText.toLocaleLowerCase():"";
    return filterText?value.filter((c:Car) => c.description.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
