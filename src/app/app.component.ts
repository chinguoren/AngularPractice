import { Component, Output ,EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  no:number;
  evenlist:number[]=[];
  oddlist:number[]=[];


  onNumberRandomed(event){
    this.no=event;
    if(this.no%2==0){
      this.evenlist.push(this.no);

    }else{

      this.oddlist.push(this.no);
      console.log(this.oddlist);
    }
   


  }






}


