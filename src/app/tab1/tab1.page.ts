import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
    //debugger;
    let numero = 0;
    numero = numero + 10;
    numero = 30;
    numero = numero - 15;

    console.log(numero);
  }

}
