import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reklam3',
  templateUrl: './reklam3.component.html',
  styleUrls: ['./reklam3.component.css']
})
export class Reklam3Component implements OnInit {

  constructor() { }

  ngOnInit() {
    /*let width = document.body.clientWidth
    let height = document.body.clientHeight
    let randomWidth = Math.floor(Math.random()*(width/4))
    document.getElementById('reklam3').style.left = `${randomWidth}px`;
    let randomHeight = Math.floor(Math.random()*height/4)
    document.getElementById('reklam3').style.top = `${randomHeight}px`;*/
  }

  
  onEdit(){
    window.location.href='http://www.screenprank.com/gandalf.html'
  }

}
