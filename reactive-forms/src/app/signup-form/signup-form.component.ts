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
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidations.cannotContainSpace,
      UsernameValidations.shouldBeUnique
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

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
