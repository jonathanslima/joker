import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {
  public menu: string[] = ['HOME', 'SYNOPSIS', 'CHARACTERS'];

  constructor() { }

  ngOnInit() {

  }

  showMenu(){
    let menuItems = document.querySelector('#menu-items');
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
    }else{
      menuItems.classList.add('none');
    }
  }
}
