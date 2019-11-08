import { Directive, Input, ElementRef, HostListener, OnInit } from '@angular/core';
import { AnimationBuilder, AnimationFactory, style, animate } from '@angular/animations';

@Directive({
  selector: '.carousel-inner',
  exportAs: 'Carousel'
})
export class CarouselDirective implements OnInit {

  @Input() animationDuration = 500;

  private slideLeft: AnimationFactory;
  private slideRight: AnimationFactory;
  private slideInLeft: AnimationFactory;
  private slideInRight: AnimationFactory;

  constructor(private el: ElementRef, private _builder: AnimationBuilder) {
  }

  ngOnInit() {
    this.slideLeft = this._builder.build([
      style({ transform: 'translateX(0)' }),
      animate(this.animationDuration, style({ transform: 'translateX(-100%)' })),
      style({ transform: 'translateX(0)' }),
    ]);

    this.slideRight = this._builder.build([
      style({ transform: 'translateX(0)' }),
      animate(this.animationDuration, style({ transform: 'translateX(100%)' })),
      style({ transform: 'translateX(0)' }),
    ]);

    this.slideInLeft = this._builder.build([
      style({ transform: 'translateX(100%)', right: 0 }),
      animate(this.animationDuration, style({ transform: 'translateX(0)' })),
      style({ right: 'initial' })
    ]);

    this.slideInRight = this._builder.build([
      style({ transform: 'translateX(-100%)', left: 0 }),
      animate(this.animationDuration, style({ transform: 'translateX(0)' })),
      style({ left: 'initial' })
    ]);
  }

  next(steps, index, total) {
      let active   = this.el.nativeElement.querySelectorAll('.carousel-item.active');
      let inactive = this.el.nativeElement.querySelector('.carousel-item:not(.active)');
      // Começar a Animação
      this.animateAll(active, this.slideLeft);

      // Animação para próximo slid
      this.preMoveElement(inactive);
      this.slideInLeft.create(inactive).play();

      setTimeout(() => {
        // Mudando de Ativo para Inativo.
        active = this.el.nativeElement.querySelectorAll('.carousel-item.active');
        inactive = this.el.nativeElement.querySelector('.carousel-item:not(.active)');
        active[0].classList.remove('active');
        this.el.nativeElement.insertBefore(active[0], null);
        inactive.classList.add('active');
        if (steps && steps - 1 > 0) {
          this.next(steps - 1, index, total);
        }
      }, this.animationDuration);
}

prev(steps, index, total) {
    const active = this.el.nativeElement.querySelectorAll('.carousel-item.active');
    const children = this.el.nativeElement.children;
    const lastChild = children[children.length - 1];
    // Começar a Animação
    this.animateAll(active, this.slideRight);
    // Mudando de Ativo para Inativo.
    this.preMoveElement(lastChild);
    this.slideInRight.create(lastChild).play();


    setTimeout(() => {
    // Mudando de Ativo para Inativo.
      const lastActive = active[active.length - 1];
      lastActive.classList.remove('active');
      this.el.nativeElement.insertBefore(lastChild, children[0]);
      lastChild.classList.add('active');
      if (steps && steps - 1 > 0) {
        this.prev(steps - 1, index, total);
      }
    }, this.animationDuration);
}

  private animateAll(elements: any[], animation: AnimationFactory) {
    elements.forEach(element => {
      animation.create(element).play();
    });
  }

  private preMoveElement(element) {
    element.style.display = 'block';
    element.style.position = 'absolute';
    setTimeout(() => {
      element.style = null;
    }, this.animationDuration);
  }

}
