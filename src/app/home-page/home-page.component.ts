import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild("f") form:ElementRef;
  
  constructor() { 
  }

  ngOnInit() {
  }

  onSubmit(f:NgForm){
    
  }
}
