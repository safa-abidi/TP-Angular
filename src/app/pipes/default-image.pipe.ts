import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(imageName: string): string {
    if (!imageName || imageName === '') {
      return 'boss.png';
    }
    return imageName;
  }

}
