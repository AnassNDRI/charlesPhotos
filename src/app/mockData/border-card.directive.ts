import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pictureBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#00000000';
  private defaultColor : string = '#ff0037';
 // private defaultColor : string = '#ffff00';
  private defaultHeigth: number = 180;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeigth(this.defaultHeigth);
    this.el.nativeElement.style.borderRadius = '35px'; // Add this line
  }

  @Input('pictureBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setHeigth(heingth: number) {
    this.el.nativeElement.style.heingth = heingth + 'px'
  }

  private setBorder(color: string) {
    let border = 'solid 4px' + color;
    this.el.nativeElement.style.border = border;
  }

}
