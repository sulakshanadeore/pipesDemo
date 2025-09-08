import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-status-demo',
  templateUrl: './status-demo.component.html',
  styleUrls: ['./status-demo.component.css']
})
export class StatusDemoComponent {
demoForm=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(3)]),

    password:new FormControl('',[Validators.required,Validators.minLength(8),
    Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/)]),

    confirmpassword:new FormControl('',[Validators.required,Validators.minLength(8),
    Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/)])
      
    
  });


  get confirmpassword()
  {
    return this.demoForm.get('confirmpassword');
  }

  get password()
  {
    return this.demoForm.get('password');
  }


  OnSubmit()
  {
    if(this.password.valid)
    {
      if(this.password.value==this.confirmpassword.value)
      alert("Valid and password match");
     else
    
      alert("Invalid, password don't macth");
    
    }

   
  }

  get username()
  {
    return this.demoForm.get('username');
  }
}
