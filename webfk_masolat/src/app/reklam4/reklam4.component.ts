import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reklam4',
  templateUrl: './reklam4.component.html',
  styleUrls: ['./reklam4.component.css']
})
export class Reklam4Component implements OnInit {

  constructor() { }

  ngOnInit() {
    /*let width = document.body.clientWidth
    let height = document.body.clientHeight
    let randomWidth = Math.floor(Math.random()*(width/4))
    document.getElementById('reklam4').style.left = `${randomWidth}px`;
    let randomHeight = Math.floor(Math.random()*height/4)
    document.getElementById('reklam4').style.top = `${randomHeight}px`;*/
  }

  showAlert(){
    let audio = new Audio();
    audio.src = "../../assets/its-me-mario.mp3";
    audio.load();
    audio.play();
  }
}
