import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-gomb',
  templateUrl: './my-gomb.component.html',
  styleUrls: ['./my-gomb.component.css']
})
export class MyGombComponent implements OnInit {

  private howerCounter = 0;
  constructor() { }

  ngOnInit() {
    
  }

  onMouseHower(event){
    console.log(event);
    if(this.howerCounter>=10){return}
    let width = document.body.clientWidth
    let height = document.body.clientHeight
    let randomWidth = Math.floor(Math.random()*(width/4)*3)
    document.getElementById('nyero').style.left = `${randomWidth}px`;
    let randomHeight = Math.floor(Math.random()*(height/4)*3)
    document.getElementById('nyero').style.top = `${randomHeight}px`;
    this.howerCounter++;
  }

  showAlert(){
    alert("Győzelem!");
  }
}
