
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIf]',
  standalone: false
})

export class AppIfDirective{
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input() set appIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);  // add to DOM
    } else {
      this.viewContainer.clear();                                // remove from DOM
    }
  }
}
