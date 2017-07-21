import { Component, OnInit } from '@angular/core';
import { CarouselItemPojo } from "app/shared/carousel/CarouselItemPojo";
declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  
  carouselItems: CarouselItemPojo[] = [
    new CarouselItemPojo("assets/img/1.jpg","Need a software programmer","Do not hesitate to view my profile"),
    new CarouselItemPojo("assets/img/2.jpg","Welcome to Aaron's Domain","Feel free to look around")
  ];

  constructor() { }

  ngOnInit() {
    //set carousel interval to 3.5s
    $('.carousel').carousel({interval: 4000});
  }

}
