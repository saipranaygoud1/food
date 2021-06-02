import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent {
  private number: number=88;
  name:string="teju";
  updatevalue(){
this.name="pranaygoud";
  }

  get counter() {
    return this.number;
  }
  set counter(value) {
    this.number=value;
  }
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
  read = true;
  str(){
    
    alert('sunny'+'pranay')
  } 
  
myObj = {
 name:"pranay",
 city:"nizamabad",

}
SwitchValue="3";

std=[
  {sno:1,name:"pranay",age:25},
]
emp ={
  firstname:"pranay",
  lastname:"boddu",
  dob:"05/31/1996",
  salary:25000
}  
}
