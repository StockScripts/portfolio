import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[negativePositive]'
})
export default class implements AfterViewInit {
  constructor(private _el: ElementRef) {}

  ngAfterViewInit(): void {
    this._el.nativeElement.style.color = this._el.nativeElement.textContent.substr(0, 1) === '-' ? 'red' : 'green';
  }
}
