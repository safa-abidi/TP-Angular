import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() colorDiv: string="";

  myFavoriteColor: string = "pink";

  @Output() changeBgColor = new EventEmitter();

  changeFathersColor(){
    this.changeBgColor.emit(this.myFavoriteColor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
