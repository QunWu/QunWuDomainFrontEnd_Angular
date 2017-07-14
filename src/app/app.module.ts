import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NavigationHeaderComponent } from './shared/navigation-header/navigation-header.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { CarouselItemComponent } from './shared/Carousel/carousel-item/carousel-item.component';
import { CalenderComponent } from "./shared/calender/calender.component";
import { PageRootComponent } from './shared/page-root/page-root.component';
import { MainContentComponent } from './home-page/main-content/main-content.component';
import { ContentSectionWithImgComponent } from './home-page/main-content/content-section-with-img/content-section-with-img.component';
import { ActiveDayDirectiveDirective } from './shared/calender/active-day-directive.directive';
import { ClockComponent } from './shared/clock/clock.component';

const appRoutes : Routes = [
  {path : '', component : HomePageComponent},
  {path : 'profile',component : ProfilePageComponent},
  {path : 'contact', component : ContactPageComponent},
  {path : 'post', component: PostPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    PostPageComponent,
    HomePageComponent,
    ProfilePageComponent,
    NavigationHeaderComponent,
    CarouselComponent,
    CarouselItemComponent,
    CalenderComponent,
    PageRootComponent,
    MainContentComponent,
    ContentSectionWithImgComponent,
    ActiveDayDirectiveDirective,
    ClockComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
