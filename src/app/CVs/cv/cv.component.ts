import { Component, OnInit, Output } from '@angular/core';
import { CV } from '../Model/CV';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: CV[] = [
    new CV(
      1,
      'laabidi',
      'safa',
      23,
      12345678,
      'software engineering',
      'safa.png'
    ),
    new CV(2, 'samet', 'rayen', 21, 88774455, 'game dev', 'rayen.png'),
  ];

  selectedCV!: CV;

  selectCV(cv: CV){
    this.selectedCV = cv;
  }

  constructor() {}

  ngOnInit(): void {}
}
