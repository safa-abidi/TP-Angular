import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CvsService } from '../cvs.service';
import { CV } from '../Model/CV';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() cv!: CV;
  //@Output() selectedCV = new EventEmitter();

  constructor(private cvService : CvsService) { }

  showCV(){
    this.cvService.showCV(this.cv);
    }

  ngOnInit(): void {
  }

}
