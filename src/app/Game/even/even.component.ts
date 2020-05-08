import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  constructor() { }


  @Input() EvenArray:number[]=[];

  ngOnInit(): void {
  }





}
