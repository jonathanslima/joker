import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casting',
  templateUrl: './casting.component.html',
  styleUrls: ['./casting.component.scss']
})
export class CastingComponent implements OnInit {
  public actor: string = 'Joaquin Phoenix';
  constructor() { }

  ngOnInit() {
  }

}
