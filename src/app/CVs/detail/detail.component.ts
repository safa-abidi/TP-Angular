import { Component, Input, OnInit } from '@angular/core';
import { CV } from '../Model/CV';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() cv!: CV;

  constructor() { }

  ngOnInit(): void {
  }

}
