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
  buttonDisabled:boolean=false;


  setInt:any;


  constructor() {


   }

  ngOnInit(): void {

  }


  startPressed(){
    this.buttonDisabled=true;
    this.setInt= setInterval(()=>{
      this.randNumber=(Math.round(Math.random() * 1000));
      this.number.emit(this.randNumber);
      

    }, 1000);
   

  }



  stopPressed(){
    this.buttonDisabled=false;
    clearInterval(this.setInt);

    
  }


}
