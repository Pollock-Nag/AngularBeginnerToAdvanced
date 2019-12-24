import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-forms',
  templateUrl: './contact-forms.component.html',
  styleUrls: ['./contact-forms.component.scss']
})
export class ContactFormsComponent implements OnInit {

  contactMethods = [
    { id: 1, name: 'Email'},
    { id: 2, name: 'Phone'},

  ]

  log(x) {
    console.log(x)
  }

  submit(form) {
    form.valid
  }

  constructor() { }

  ngOnInit() {
  }

  

}
