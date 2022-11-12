import { Injectable } from '@angular/core';
import { CV } from '../CVs/Model/CV';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private embauches: CV[];;

  constructor(private toastr: ToastrService) {
    this.embauches = [];
  }

  getEmbauches(): CV[] {
    return this.embauches;
  }

  hire(cv: CV): void{
    if(!this.embauches.some(c => c.id === cv.id)){
      this.embauches.push(cv);
      this.toastr.success("Success", cv.firstname + " is hired");
    }else{
      this.toastr.error("Error", cv.firstname + " already hired");
    }
  }
}
