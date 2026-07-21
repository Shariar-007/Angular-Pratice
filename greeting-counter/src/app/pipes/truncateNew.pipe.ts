
import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  standalone: false,
  name: 'truncateNew'
})

export class TruncateNewPipe implements PipeTransform{
  transform(value: string, limit: number = 10){
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
