import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit {
  faTimes = faTimes;

  constructor() { }

  ngOnInit() {
  }

  closeVideo(){
    document.querySelector('.full-screen').classList.remove('open-trailer')
    document.querySelector('.full-screen').classList.add('close-trailer')
  }

}
