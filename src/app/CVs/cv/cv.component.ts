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

  selectCV(cv: CV){
    this.selectedCV = cv;
  }

  constructor(private cvsService: CvsService) {}

  ngOnInit(): void {
    this.cvs = this.cvsService.getCVs();
  }
}
