import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reklam5',
  templateUrl: './reklam5.component.html',
  styleUrls: ['./reklam5.component.css']
})
export class Reklam5Component implements OnInit {

  constructor() { }

  ngOnInit() {
    let width = document.body.clientWidth
    let height = document.body.clientHeight
    let randomWidth = Math.floor(Math.random()*(width/4))
    document.getElementById('reklam5').style.left = `${randomWidth}px`;
    let randomHeight = Math.floor(Math.random()*height/4)
    document.getElementById('reklam5').style.top = `${randomHeight}px`;
  }

  showAlert(){
    var audio = new Audio();
    audio.src = "../../assets/Kevin.mp3";
    audio.load();
    audio.play()
  }
}
