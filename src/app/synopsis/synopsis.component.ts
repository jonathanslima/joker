import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-synopsis',
  templateUrl: './synopsis.component.html',
  styleUrls: ['./synopsis.component.scss']
})
export class SynopsisComponent implements OnInit {
  public titleSynopsis: string = 'A man struggling to find his way in Gotham\'s fractured society';
  public textSynopsis: string = 'Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver. The film, based on DC Comics characters, stars Joaquin Phoenix as the Joker. Joker provides a possible origin story for the character; set in 1981, it follows Arthur Fleck, a failed stand-up comedian whose descent into insanity and nihilism inspires a violent counter-cultural revolution against the wealthy in a decaying Gotham City. Robert De Niro, Zazie Beetz, Frances Conroy, Brett Cullen, Glenn Fleshler, Bill Camp, Shea Whigham, and Marc Maron appear in supporting roles. Joker was produced by Warner Bros. Pictures, DC Films, and Joint Effort, in association with Bron Creative and Village Roadshow Pictures, and distributed by Warner Bros.';

  constructor() { }

  ngOnInit() {
  }

}
