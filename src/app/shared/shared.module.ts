import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from "app/shared/carousel/carousel.component";
import { CarouselItemComponent } from "app/shared/carousel/carousel-item/carousel-item.component";
import { CalenderComponent } from "app/shared/calender/calender.component";
import { PageRootComponent } from "app/shared/page-root/page-root.component";
import { ActiveDayDirectiveDirective } from "app/shared/calender/active-day-directive.directive";
import { ClockComponent } from "app/shared/clock/clock.component";
import { BlankListGroupComponent } from "app/shared/customized-list-group/blank-list-group/blank-list-group.component";

@NgModule({
  declarations: [
    CarouselComponent,
    CarouselItemComponent,
    CalenderComponent,
    PageRootComponent,
    ActiveDayDirectiveDirective,
    ClockComponent,
    BlankListGroupComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CarouselComponent,
    CalenderComponent,
    PageRootComponent,
    ClockComponent,
    BlankListGroupComponent
  ]
})
export class SharedModule {}