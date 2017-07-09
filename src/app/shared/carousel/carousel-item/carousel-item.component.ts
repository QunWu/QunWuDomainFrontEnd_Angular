import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';
import { CarouselItemPojo } from "app/shared/entity/CarouselItemPojo";

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
  }

}
