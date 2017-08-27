import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomInText]'
})
export class ZoomInTextDirective {
  className = 'large';
  zoomedIn = false;

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('mouseenter')
  zoomInText() {
    this.render.addClass(this.el.nativeElement, this.className);
  }

  @HostListener('mouseleave')
  zoomOutText() {
    this.render.removeClass(this.el.nativeElement, this.className);
  }
}
