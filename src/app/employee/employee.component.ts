import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
employee={
id:101,
name:'Amitabh Bacchan',
salary:5555422.983,
deparment:'IT',
joiningDate:new Date(2023,8,1),
};

msg:string="welcome to angular";


}
