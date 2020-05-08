import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameControlComponent } from './Game/game-control/game-control.component';
import { OddComponent } from './Game/odd/odd.component';
import { EvenComponent } from './Game/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
