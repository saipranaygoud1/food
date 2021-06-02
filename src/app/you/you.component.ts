import { Component, OnInit, Input,OnChanges,SimpleChange,SimpleChanges,DoCheck } from '@angular/core';

@Component({
  selector: 'app-you',
  templateUrl: './you.component.html',
  styleUrls: ['./you.component.scss']
})
export class YouComponent implements OnInit,OnChanges,DoCheck {
private myNumber;number;
@Input ()myNumber2:string;
  constructor() { }
@Input()
set myNewNumber(number:number){
  this.myNumber=number;
}
get myNewNumber(){
  return this.myNumber;
}
ngOnChanges(changes:SimpleChanges){
  const newNumberChange:SimpleChange=changes.myNewNumber;
  console.log("previous value - (ng on changes)",newNumberChange.previousValue)
  console.log("current value - (ng on changes)",newNumberChange.currentValue)
  this.myNewNumber=newNumberChange.currentValue
}

  ngOnInit(): void {
    console.log("ngOninit value",this.myNewNumber);
  }
  ngDoCheck(){
    console.log(this.myNumber2)
  }

}
