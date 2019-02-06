import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'auth-contact-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class ContactPageComponent implements OnInit {
  f: FormGroup;

  constructor() { }

  ngOnInit() {
    this.f = new FormGroup({
      'content' : new FormControl(null, [Validators.required]),
      'subject' : new FormControl(null, [Validators.required]),
      'email' : new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSubmit(){
    console.log(this.f);
  }

}
