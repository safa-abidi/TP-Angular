import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {
  color: String = 'black';
  fontSize: number = 30;
  font: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  changeFont(font: String) {
    this.font = font;
  }

}
