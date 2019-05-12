import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reklam1',
  templateUrl: './reklam1.component.html',
  styleUrls: ['./reklam1.component.css']
})
export class Reklam1Component implements OnInit {

  

  constructor() {
   }

  ngOnInit() {
    /*let width = document.body.clientWidth;
    let height = document.body.clientHeight;
    let randomWidth = Math.floor(Math.random()*(width/4)*3);
    document.getElementById('reklam1').style.left = `${randomWidth}px`;
    let randomHeight = Math.floor(Math.random()*height/4)*3;
    document.getElementById('reklam1').style.top = `${randomHeight}px`;*/
  }
  

  showAlert(){
    
    alert("Rossz kutya vagy!")
  }

  dog(){
    let audio = new Audio();
    audio.src = "../../assets/dog.mp3";
    audio.load();
    audio.play();

  } 
}
