import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  template: ` counter works! 
  <button (click)='show()'>Click here</button>
    <p>Your conter number is:<span id="click"> {{counter}}</span></p>
    `,
  styles: ['p{font-weight:bold;font-size:40px;font-family:arial}']
})
export class CounterComponentComponent implements OnInit {

  counter: number=1001;

  show() {
    this.counter++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
