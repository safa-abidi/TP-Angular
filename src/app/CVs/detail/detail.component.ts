import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmbaucheService } from 'src/app/Embauche/embauche.service';
import { CvsService } from '../cvs.service';
import { CV } from '../Model/CV';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() cv!: CV;

  constructor(private embaucheService: EmbaucheService, private router:Router, private cvService:CvsService) { }

  ngOnInit(): void {
    this.cvService.mySelPersonne$.subscribe( (cv) =>
    {  this.cv = cv;
    console.log(this.cv);}
    );
    ;
  }

  hire(){
    this.embaucheService.hire(this.cv);
  }

  seeMore(){
    const link = ['cv', this.cv.id];
    this.router.navigate(link);
  }

}
