//entry point of application

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

//important components
import { AppComponent }   from './app.component';

@NgModule({

  imports:      [ 
    BrowserModule,
    FormsModule 
  ], //platform specific

  //ad components
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }