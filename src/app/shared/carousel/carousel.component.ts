import { Component, OnInit } from '@angular/core';
import { CarouselItemPojo } from "app/shared/carousel/CarouselItemPojo";
declare var $:any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carouselItems: CarouselItemPojo[] = [
    new CarouselItemPojo("https://pbs.twimg.com/media/DD0zjheVwAUNZCk.jpg","Welcome to Aaron's Domain","Feel free to look around"),
    new CarouselItemPojo("https://pbs.twimg.com/media/DD0zjheVwAUNZCk.jpg","Need a software programmer?","Do not hesitate to view my profile"),
    new CarouselItemPojo("https://pbs.twimg.com/media/DD0zjheVwAUNZCk.jpg","Tech and life balance","Share my happiness with all you guys")
  ];

  constructor() { }

  ngOnInit() {
    $('.carousel').carousel({interval: 4000});
  }

}
