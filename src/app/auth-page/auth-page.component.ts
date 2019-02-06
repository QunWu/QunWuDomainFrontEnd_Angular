import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'auth-contact-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
  signinForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'password' : new FormControl(null, [Validators.required]),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'isRememberMeEnabled': new FormControl()
    });
  }

  onSubmit(){
    console.log(this.signinForm);
  }

}
