import { Component } from '@angular/core';

@Component({
  selector: 'app-root',         //directive
  template: `
    <app-random></app-random>
  `,
  styles: []
})
export class AppComponent {
  title = 'MyFirstAngularApp';
}
