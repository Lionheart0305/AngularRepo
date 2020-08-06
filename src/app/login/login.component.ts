import { Component, OnInit } from '@angular/core';
import { Login } from "./login";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user1=new Login('Shivam','shivam123');
  user2=new Login('Mark','mark123');
  user3=new Login('Steve','steve123');
  user4=new Login('John','john123');
  user5=new Login('Sam','sam123');
  user6=new Login('Srijan','srijan123');
  user7=new Login('Satya','satya123');
  user8=new Login('Shiv','shiv123');
  user9=new Login('Romeo','romoe123');
  user10=new Login('Diwakar','diwakar123');

  constructor() { }

  ngOnInit(): void {
  }

}
