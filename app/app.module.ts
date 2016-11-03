//entry point of application

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//important components
import { AppComponent }   from './app.component';

@NgModule({

  imports:      [ BrowserModule ], //platform specific

  //ad components
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }