import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-status-demo',
  templateUrl: './status-demo.component.html',
  styleUrls: ['./status-demo.component.css']
})
export class StatusDemoComponent {
demoForm=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(3)])
  });

  get username()
  {
    return this.demoForm.get('username');
  }
}
