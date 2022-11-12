import { Component, OnInit } from '@angular/core';
import { CV } from 'src/app/CVs/Model/CV';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  embauches: CV[] = [];

  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
    this.embauches = this.embaucheService.getEmbauches();
  }

}
