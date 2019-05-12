import { Component, OnInit, SecurityContext, ViewChild, AfterViewInit } from '@angular/core';
import { Reklam1Component } from '../reklam1/reklam1.component';
import { Reklam2Component } from '../reklam2/reklam2.component';
import { Reklam3Component } from '../reklam3/reklam3.component';
import { Reklam4Component } from '../reklam4/reklam4.component';
import { Reklam5Component } from '../reklam5/reklam5.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.css']
})
export class WinComponent implements OnInit, AfterViewInit {
  public counter = 0;

  constructor() {

    setInterval(()=>{
      /*this.components.push(this.componentList[this.counter%5]);*/
      this.counter++;
    },1000)
   }

  ngOnInit() {
  }
  ngAfterViewInit(){
  }
  re(){
    window.location.reload();
  }
}
