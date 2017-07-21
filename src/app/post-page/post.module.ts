import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostPageComponent } from "./post-page.component";
import { PostPreviewComponent } from './post-list/post-preview/post-preview.component';
import { PostFullviewComponent } from './post-fullview/post-fullview.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostsRoutingModule } from "app/post-page/posts-page-routing.module";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  declarations: [
    PostPageComponent,
    PostListComponent,
    PostPreviewComponent,
    PostFullviewComponent
  ],
  imports: [
    PostsRoutingModule,
    CommonModule,
    SharedModule
  ],
})
export class PostModule { }
