import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvsService } from '../cvs.service';
import { CV } from '../Model/CV';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  personne!: CV;

  constructor(private cvService: CvsService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.personne = this.cvService.getCVById(params['id']);
    });
  }

  delete(id: number){
    this.cvService.deleteCVById(id);
    this.router.navigate(['cv']);
  }

}
