import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import {FormGroup,FormControl, Validators} from '@angular/forms'




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor() { 

  }

  ngOnInit(): void {

    this.loginForm= new FormGroup({
      'username': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      
    });

  }
  onSubmit()
  {
    console.log(this.loginForm)
    this.loginForm.reset();
  }

}
