import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';
import { CarouselItemPojo } from "app/shared/carousel/CarouselItemPojo";
declare var $: any;

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {
  @Input() anItem:CarouselItemPojo = null;
  @Input() index : number;

  constructor(private elemRef:ElementRef,private render:Renderer2) { }
  ngOnInit() {
    if(this.index == 0){
      this.render.addClass(this.elemRef.nativeElement, "active");
    }
    //bind onClick event to the button with the animation (add duration)
    $('a.roll-button').click(function(){
      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 1000);
      return false;
    });
  }

}
