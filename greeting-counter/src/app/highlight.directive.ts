
import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})

export class HighLightDirective{
  @Input() appHighlight = 'yellow';

  constructor(private el: ElementRef){}

  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
