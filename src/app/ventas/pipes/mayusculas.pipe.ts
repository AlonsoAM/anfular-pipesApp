import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  transform(value: string, enMayusuculas: boolean = true): string {
    return (enMayusuculas) ? value.toUpperCase() : value.toLowerCase()
  }
}
