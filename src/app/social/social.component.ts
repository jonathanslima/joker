import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;

  constructor() {
  }

  ngOnInit() {
  }

}
