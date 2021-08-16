import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTaskDone]'
})
export class TaskDoneDirective implements OnChanges {
  @Input('appTaskDone') isChecked: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  ngOnChanges() {
    if(this.isChecked === true) {
      this.renderer.addClass(this.elRef.nativeElement, 'wrapper__title--done')
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'wrapper__title--done')
    }
  }


}
