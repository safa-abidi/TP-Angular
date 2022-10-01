import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  color: string = "";

  updateColor(newColor:string){
    this.color = newColor;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
