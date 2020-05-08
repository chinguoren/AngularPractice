import { Component, OnInit ,EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  randNumber:number;
  numList:number[];

  @Output() number= new EventEmitter<number>();


  setInt:any;


  constructor() {


   }

  ngOnInit(): void {

  }


  startPressed(){

    this.setInt= setInterval(()=>{
      this.randNumber=(Math.round(Math.random() * 1000));
      this.number.emit(this.randNumber);
      

    }, 1000);
   

  }



  stopPressed(){
    clearInterval(this.setInt);

    
  }


}
