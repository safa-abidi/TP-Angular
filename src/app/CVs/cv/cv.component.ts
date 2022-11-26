import { Component, OnInit, Output } from '@angular/core';
import { CvsService } from '../cvs.service';
import { CV } from '../Model/CV';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: CV[] = [];

  selectedCV!: CV;

  constructor(private cvsService: CvsService) {}

  selectCV(cv: CV){
    this.selectedCV = cv;
  }

  ngOnInit(): void {
    this.cvs = this.cvsService.getCVs();
  }
}
