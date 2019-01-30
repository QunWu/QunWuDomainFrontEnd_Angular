import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPageComponent } from "./post-page.component";
import { PostFullviewComponent } from './post-fullview/post-fullview.component';
import { PostListComponent } from './post-list/post-list.component';

const postsRoutes: Routes = [
  { path: '', component: PostPageComponent, children: [
    { path: '', component: PostListComponent },
    { path: ':postId', component: PostFullviewComponent}
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(postsRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class PostsRoutingModule {}
