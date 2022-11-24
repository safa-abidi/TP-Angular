import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CvsService } from '../cvs.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCVComponent implements OnInit {

  constructor(private cvService: CvsService, private router: Router) { }

  ngOnInit(): void {
  }

  addCV(form: NgForm){
    console.log(form.value.name);
    this.cvService.addCV(form.value);
    this.router.navigate(['cv']);
  }

}
