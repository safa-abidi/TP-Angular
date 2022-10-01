import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  color:string = "yellow";

  changeBg(value:string) {
    this.color=value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
