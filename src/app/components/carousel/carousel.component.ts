import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  imageObservable$ : Observable<string> | undefined;;
  images = ['7.jpg', '8.jpg', 'bg.png'];
  bgImage: string = '';

  constructor() {}

  ngOnInit(): void {
    this.imageObservable$ = new Observable<string>((observer) => {
      let i = this.images.length - 1;
      setInterval(() => {
        observer.next(this.images[i]);
        if (i > 0) {
          i--;
        } else {
          i = this.images.length - 1;
        }
      }, 2500);
    });

    this.imageObservable$.subscribe((image: string) => {
      this.bgImage = image;
    });

  }
}
