import { Component, OnInit } from '@angular/core';
import { faCopyright, faRegistered } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faCopyright = faCopyright;
  faRegistered = faRegistered;

  constructor() { }

  ngOnInit() {
  }

}
