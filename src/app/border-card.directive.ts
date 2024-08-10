import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/*
 * les crochet [] sont OBLICATOIRE pour les directives. Sans eux, on ne parle plus de directive mais de composant. 
 * ici a la place de appBorderCard on prefix avec pkm afin de signifier qur cette directive s'applique sur les cartes pokemon -> totalement optionnel !
 */
@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string ="#f5f5f5";
  private defaultColor: string ="#009688";
  private defaultHeight:number = 180;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input('appBorderCard') borderColor: string //alias

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }

  private setHeight(height: number) {
    let myHeight = "px";     
    this.el.nativeElement.style.border = myHeight+height;
  }

  private setBorder(color: string) {
    let myBorder = "solid 2px ";     
    this.el.nativeElement.style.border = myBorder+color;
  }

}
