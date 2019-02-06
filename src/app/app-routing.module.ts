import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from "app/home-page/home-page.component";
import { ProfilePageComponent } from "app/profile-page/profile-page.component";
import { ContactPageComponent } from "app/contact-page/contact-page.component";
import { AuthPageComponent } from './auth-page/auth-page.component';

const appRoutes : Routes = [
  {path : '', component : HomePageComponent},
  {path : 'profile',component : ProfilePageComponent},
  {path : 'contact', component : ContactPageComponent},
  {path : 'signin', component : AuthPageComponent},
  {path : 'post', loadChildren: './post-page/post.module#PostModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
