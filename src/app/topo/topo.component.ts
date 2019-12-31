import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {
  public menu: object[] = [
    {
      menuItem: 'HOME',
      link: '/'
    }, {
      menuItem: 'SYNOPSIS',
      link: '/synopsis'
    }, {
      menuItem: 'CHARACTERS',
      link: '/characters'
    }
  ];

  constructor() { }

  ngOnInit() {

  }

  showMenu(){
    let $ = document.querySelector.bind(document);
    let menuItems = $('#menu-items');
    let checkIfHidden = menuItems.classList.contains('none');
    let arrBgs = Array.prototype.slice.call(document.querySelectorAll('.bg-menu-item'));

    arrBgs[0].style.width= `0`;
    arrBgs[1].style.width= `0`;
    arrBgs[2].style.width= `0`;

    if(checkIfHidden){
      menuItems.classList.remove('none');
      arrBgs.map(function(){
        let i = 0, j = 0, k = 0;

        let increase = setInterval(function(){
          if(i < 161){
            arrBgs[0].style.width= `${i}px`;
          }

          if(i > 80 && i < 321){
            arrBgs[1].style.width= `${j}px`;
            j++;

          }
          if(i > 160){
            arrBgs[2].style.width= `${k}px`;
            k++;
          };

          i++;
          if(i == 322) clearInterval(increase);

        }, .5)
      })
      $('.line-1').classList.add('close-line1')
      $('.line-2').classList.add('close-line2')
      $('.content-info, .synopsis').classList.add('blur')

    }else{
      menuItems.classList.add('none');
      $('.line-1').classList.remove('close-line1')
      $('.line-2').classList.remove('close-line2')
      $('.content-info, .synopsis').classList.remove('blur')
    }
  }

  closeMenu(){
    let $ = document.querySelector.bind(document);
    $('#menu-items').classList.add('none')
    $('.line-1').classList.remove('close-line1')
    $('.line-2').classList.remove('close-line2')
    $('.content-info, .synopsis').classList.remove('blur')
  }
}
