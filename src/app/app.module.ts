import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MainContentComponent } from './profile-page/main-content/main-content.component';
import { ContentSectionWithImgComponent } from './profile-page/main-content/content-section-with-img/content-section-with-img.component';
import { AppRoutingModule } from "app/app-routing.module";
import { SharedModule } from "app/shared/shared.module";
import { NavigationHeaderComponent } from "app/navigation-header/navigation-header.component";
import { AuthPageComponent } from './auth-page/auth-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    HomePageComponent,
    ProfilePageComponent,
    MainContentComponent,
    ContentSectionWithImgComponent,
    NavigationHeaderComponent,
    AuthPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
