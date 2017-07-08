import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NavigationHeaderComponent } from './shared/navigation-header/navigation-header.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { CarouselItemComponent } from './shared/Carousel/carousel-item/carousel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    PostPageComponent,
    HomePageComponent,
    ProfilePageComponent,
    NavigationHeaderComponent,
    CarouselComponent,
    CarouselItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
