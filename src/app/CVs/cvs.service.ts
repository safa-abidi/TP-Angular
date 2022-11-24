import { Injectable } from '@angular/core';
import { CV } from './Model/CV';

@Injectable({
  providedIn: 'root',
})
export class CvsService {
  private cvs: CV[];

  constructor() {
    this.cvs = [
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
      new CV(3, 'John', 'Doe', 21, 99886600, 'web dev', ''),
    ];
  }
  getCVs(): CV[] {
    return this.cvs;
  }

  getCVById(id: number): CV {
    const cv = this.cvs.find((cv) => cv.id == id);
    return cv!;
  }

  deleteCVById(id: number): void {
    const index = this.cvs.indexOf(this.getCVById(id));
    this.cvs.splice(index, 1);
  }

  addCV(cv: CV): void {
    cv.id = this.cvs[this.cvs.length - 1].id++;
    this.cvs.push(cv);
  }
}
