import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css']
})
export class RouterSimulatorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToComponent(component:string){
    this.router.navigate([component]);
  }

}
