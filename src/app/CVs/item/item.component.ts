import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CV } from '../Model/CV';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() cv!: CV;
  @Output() selectedCV = new EventEmitter();

  showCV(){
    this.selectedCV.emit(this.cv);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
