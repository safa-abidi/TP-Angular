import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  colors = ['coral','red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'lightblue', 'lightgreen', 'lightyellow', 'lightorange', 'lightpurple', 'lightpink'];

  @HostBinding('style.borderColor') bc: string = "lightblue";
  @HostBinding('style.color') color: string = "green";
  constructor() { }

  @HostListener('keyup') onKeyUp() {
    //this.bc = this.getRandomColor();
    //this.color = this.getRandomColor();
    const i = Math.floor(Math.random() * (this.colors.length - 1));
    this.bc = this.colors[i];
    this.color = this.colors[i];
  }

  /*getRandomColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }*/

}
