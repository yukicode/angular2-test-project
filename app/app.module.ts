//entry point of application

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

//important components
import { AppComponent }   from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({

  imports:      [ 
    BrowserModule,
    FormsModule 
  ], //platform specific

  //ad components
  declarations: [ 
    AppComponent,
    HeroDetailComponent 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }