import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(private fb: FormBuilder) { }

  loginForm = this.fb.group({
    email: [''],
    password: ['']

  });

  ngOnInit(): void {
  }

  onsubmit(){
  this.user = Object.assign(this.user, this.loginForm.value);
  localStorage.setItem('Users', JSON.stringify(this.user));
}
    
}
