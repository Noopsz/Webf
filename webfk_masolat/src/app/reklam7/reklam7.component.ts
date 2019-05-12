import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reklam7',
  templateUrl: './reklam7.component.html',
  styleUrls: ['./reklam7.component.css']
})
export class Reklam7Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show(){
    alert("Congratulation!");
    alert("You’ve Won an iPhone X");
  }

}
