import { Component, OnInit } from '@angular/core';
import { Characters } from './characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public charactersList: any[] = Characters;

  constructor() {
  }

  ngOnInit() {
  }

}
