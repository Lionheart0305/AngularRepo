import { Component } from "@angular/core";
import { LuckynumberComponent } from './luckynumber/luckynumber.component';

@Component({
    selector:'app-first',
    template:`<p>My first component, Woaa i have created my first angular component</p>
    <app-luckynumber></app-luckynumber>`,
    styles:[]
})

export class FirstComponent {

}