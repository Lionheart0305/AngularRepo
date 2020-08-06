import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Name:string="";
  Value:string="";
  greetings:any[]=["Hello","Hi","Namaste","Salaam","Bonjour"];

  show() {
    this.Value=this.greetings[Math.floor(Math.random() * this.greetings.length)];
  }

}
