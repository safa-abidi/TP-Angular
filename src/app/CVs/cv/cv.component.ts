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
      'Laabidi',
      'Safa',
      23,
      12345678,
      'software engineering',
      'safa.png'
    ),
    new CV(2, 'Samet', 'Rayen', 21, 88774455, 'game dev', 'rayen.png'),
    new CV(3, 'John', 'Doe', 21, 88774455, 'web dev', ''),
  ];

  selectedCV!: CV;

  selectCV(cv: CV){
    this.selectedCV = cv;
  }

  constructor() {}

  ngOnInit(): void {}
}
