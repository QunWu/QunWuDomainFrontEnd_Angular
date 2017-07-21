import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomePageComponent } from "app/home-page/home-page.component";
import { ProfilePageComponent } from "app/profile-page/profile-page.component";
import { ContactPageComponent } from "app/contact-page/contact-page.component";
import { PostPageComponent } from "app/post-page/post-page.component";

const appRoutes : Routes = [
  {path : '', component : HomePageComponent},
  {path : 'profile',component : ProfilePageComponent},
  {path : 'contact', component : ContactPageComponent},
  // {path : 'post', component: PostPageComponent},
  { path: 'post', loadChildren: './post-page/post.module#PostModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
