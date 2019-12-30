import { Component, OnInit } from '@angular/core';
import { quotesList } from './phrases';

@Component({
  selector: 'app-phrases',
  templateUrl: './phrases.component.html',
  styleUrls: ['./phrases.component.scss']
})
export class PhrasesComponent implements OnInit {
  public phrases: any = quotesList;
  public randomNumber: number =  Math.floor(Math.random() * (4 - 0));

  constructor() { }

  ngOnInit() {
    document.querySelector('.statement b').innerHTML = this.phrases[this.randomNumber].quote;
  }

}
