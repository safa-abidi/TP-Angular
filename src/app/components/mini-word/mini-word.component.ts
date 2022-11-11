import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {
  color: String = 'red';
  fontSize: number = 14;
  font: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  changeFont(font: String) {
    this.font = font;
  }

}
