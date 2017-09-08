import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomInText]'
})
export class ZoomInTextDirective {
  className = 'large';
  zoomedIn = false;

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click')
  zoomInText(): void {
    if (this.zoomedIn) {
      this.render.removeClass(this.el.nativeElement, this.className);
    } else {
      this.render.addClass(this.el.nativeElement, this.className);
    }
    this.zoomedIn = !this.zoomedIn;
  }
}
