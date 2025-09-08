import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { TitlecasePipe } from './titlecase.pipe';

import { StatusDemoComponent } from './status-demo/status-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TitlecasePipe,
    StatusDemoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
   
       AppRoutingModule
  ],
  providers: [],
  bootstrap: [StatusDemoComponent]
})
export class AppModule { }
