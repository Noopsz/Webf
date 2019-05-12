import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WinComponent } from './win/win.component';
import { Reklam1Component } from './reklam1/reklam1.component';
import { Reklam2Component } from './reklam2/reklam2.component';
import { Reklam3Component } from './reklam3/reklam3.component';
import { Reklam4Component } from './reklam4/reklam4.component';
import { MyGombComponent } from './my-gomb/my-gomb.component';
import { Reklam5Component } from './reklam5/reklam5.component';
import { Reklam6Component } from './reklam6/reklam6.component';
import { Reklam7Component } from './reklam7/reklam7.component';
import { Reklam8Component } from './reklam8/reklam8.component';

@NgModule({
  declarations: [
    AppComponent,
    WinComponent,
    Reklam1Component,
    Reklam2Component,
    Reklam3Component,
    Reklam4Component,
    MyGombComponent,
    Reklam5Component,
    Reklam6Component,
    Reklam7Component,
    Reklam8Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
