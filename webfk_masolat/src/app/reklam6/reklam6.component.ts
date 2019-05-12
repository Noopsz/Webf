import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reklam6',
  templateUrl: './reklam6.component.html',
  styleUrls: ['./reklam6.component.css']
})
export class Reklam6Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  show(){
    var randomnumber = Math.floor(Math.random() * (1500 - 10 + 1)) + 10;
    window.scroll(randomnumber,randomnumber);
  }
}
