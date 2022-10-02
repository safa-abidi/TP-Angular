import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent implements OnInit {
  name = "Laabidi";
  firstname = "Safa";
  age = 23;
  job = "Etudiante";
  path = "safa.png";
  citation = "it ain't that bad, it could always be worse";
  description = "software engineering";
  motsCles = "Angular spring flutter";

  getImage():string{
    return "assets/images/" + this.path;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
