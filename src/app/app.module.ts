import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from "./firstcomp";
import { LuckynumberComponent } from './luckynumber/luckynumber.component';
import { CounterComponentComponent } from './counter-component/counter-component.component';
import { HellonameComponent } from './helloname/helloname.component';
import { FormsModule } from "@angular/forms";
import { PrintNameComponent } from './print-name/print-name.component';
import { DirectivecompComponent } from './directivecomp/directivecomp.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { RandomComponent } from './random/random.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LuckynumberComponent,
    CounterComponentComponent,
    HellonameComponent,
    PrintNameComponent,
    DirectivecompComponent,
    EmployeeComponent,
    LoginComponent,
    RandomComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap: [FirstComponent]
  //bootstrap: [LuckynumberComponent]
})

export class AppModule { }
