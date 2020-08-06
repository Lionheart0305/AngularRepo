import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-print-name',
  template: `
    <form (ngSubmit) ='show()'>
        UserName : <input [(ngModel)] =user.username name='uname'/>
        UserAddress : <input [(ngModel)] =user.useraddress name='uadd'/>
        User Age: <input [(ngModel)] =user.userage name='uage'/>
        <button type='submit'> submit </button>
        <!--<img src='{{imagePath}}'/> -->
        <img [src] ='imagePath'/>
        <span [innerHTML] ='title'></span>
    </form>
  `,
  styles: [
  ]
})
export class PrintNameComponent implements OnInit {

  imagePath='assets/pp.jpg';
  title='Hello Hpw are you?'

  user=new User();

  constructor() {
    console.log('constructor called');
  }

  show() {
    console.log('show method called');
    console.log(this.user.username+' ' + this.user.useraddress+' '+this.user.userage);
  }

  ngOnInit(): void {
    console.log('On init methid called');
    console.log(this.user.username+' ' + this.user.useraddress+' '+this.user.userage);
  }

}

