import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivecomp',
  templateUrl: './directivecomp.component.html',
  styleUrls: ['./directivecomp.component.css']
})
export class DirectivecompComponent implements OnInit {

  isValid:boolean=true;

  assign(value){
    this.isValid=value;
  }

  constructor() { }

  ngOnInit(): void {
  }

  cities:any[]=["Mumbai","Gujarat","Pune","Delhi"];
  

}
