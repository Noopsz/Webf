import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reklam2',
  templateUrl: './reklam2.component.html',
  styleUrls: ['./reklam2.component.css']
})
export class Reklam2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    /*let width = document.body.clientWidth
    let height = document.body.clientHeight
    let randomWidth = Math.floor(Math.random()*(width/4))
    document.getElementById('reklam2').style.left = `${randomWidth}px`;
    let randomHeight = Math.floor(Math.random()*height/4)
    document.getElementById('reklam2').style.top = `${randomHeight}px`;*/
  }

  showAlert(){
    window.location.href='https://sports.bwin.com/hu/sports'
  }
}
