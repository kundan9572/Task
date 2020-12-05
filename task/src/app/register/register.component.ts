import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { PasswordValidator } from '../../app/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  get username() {
    return this.registerForm.get('username');
  }

  constructor(private fb: FormBuilder) { }

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email:['',[Validators.required, Validators.email]],
    mobile: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    password: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9@$]')]],
    confirmPassword: ['']

  },{validators: PasswordValidator} );
  
  ngOnInit(): void {
  }

}
