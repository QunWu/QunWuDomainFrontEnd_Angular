import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
/**
 * Google API key: AIzaSyDDvWXfZ2UwwbBr5Ga1yyaveMwtnDBa_d8
 */
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
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
