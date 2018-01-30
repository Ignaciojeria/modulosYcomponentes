import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRuta1Component } from './app-ruta1/app-ruta1.component';

//Enrutador
import { ROUTES } from './app.router';



@NgModule({
  declarations: [
    AppComponent,
    AppRuta1Component
  ],
  imports: [
    BrowserModule,
    ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
