
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  standalone: false,
  name: 'truncateNew',
  pure: false
})

export class TruncateNewPipe implements PipeTransform{
  transform(value: string, limit: number = 10){
    console.log('truncate pipe ran');
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}




