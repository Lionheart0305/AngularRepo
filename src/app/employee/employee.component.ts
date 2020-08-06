import { Component, OnInit } from '@angular/core';
import { Employee } from "./emp";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent implements OnInit {

  emp1=new Employee(100,'Shivam',22,'Trainee');
  emp2=new Employee(101,'Mark',34,'HR');
  emp3=new Employee(102,'Steve',45,'Instructor');
  emp:Employee[]=[this.emp1,this.emp2,this.emp3];

  constructor() { }

  ngOnInit(): void {
  }

}
