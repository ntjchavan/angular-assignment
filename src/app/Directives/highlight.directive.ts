import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highLightColor: string = 'yellow';

  private originalColor: string = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  OnMouseEnter() {
    console.log('mouse entered', this.highLightColor);
    this.originalColor = this.el.nativeElement.style.backgroundColor;
    this.el.nativeElement.style.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') 
  OnMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.originalColor;
  }
}
