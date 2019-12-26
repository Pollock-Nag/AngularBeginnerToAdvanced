import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidations } from './username.validator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', Validators.required, UsernameValidations.shouldBeUnique),
    password: new FormControl('', Validators.required)
  });

  login() {
    this.form.setErrors({
      invalidLogin: true,
    });
  }

  // Properties
  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  constructor() { }

  ngOnInit() {
  }

}
