import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appMdlFocus]'
})
export class MdlFocusDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    componentHandler.upgradeElement(
      this.elementRef.nativeElement.parentElement
    );
    this.elementRef.nativeElement.focus();
  }
}
