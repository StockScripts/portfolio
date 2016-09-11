import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[mdlFocus]'
})
export default class implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    componentHandler.upgradeElement(this.elementRef.nativeElement.parentElement);
    this.elementRef.nativeElement.focus();
  }
}
