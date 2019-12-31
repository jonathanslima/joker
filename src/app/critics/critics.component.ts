import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-critics',
  templateUrl: './critics.component.html',
  styleUrls: ['./critics.component.scss']
})
export class CriticsComponent implements OnInit {
  public mainCritic: object[] = [{
    critic: 'The film of the year!',
    source: 'Empire'
  }]
  constructor() { }

  ngOnInit() {
    
  }

}
