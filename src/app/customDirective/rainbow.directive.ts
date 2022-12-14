import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  @HostBinding('style.borderColor') bc: string = "lightblue";
  @HostBinding('style.color') color: string = "green";
  constructor() { }

  @HostListener('keyup') onKeyUp() {
    this.bc = this.getRandomColor();
    this.color = this.getRandomColor();
  }

  getRandomColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }

}
