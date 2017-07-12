import { Component, OnInit } from '@angular/core';
import { CarouselItemPojo } from "app/shared/entity/CarouselItemPojo";
declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carouselItems: CarouselItemPojo[] = [
    new CarouselItemPojo("https://pbs.twimg.com/media/DD0zjheVwAUNZCk.jpg","Need a software programmer","Do not hesitate to view my profile"),
    new CarouselItemPojo("assets/img/2.jpg","Welcome to Aaron's Domain","Feel free to look around")
  ];

  constructor() { }

  ngOnInit() {
    //set carousel interval to 3.5s
    $('.carousel').carousel({interval: 4000});
    //bind onClick event to the button with the animation (add duration)
    $('#toMainContent').click(function(){
      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 1000);
      return false;
    });
  }

}
