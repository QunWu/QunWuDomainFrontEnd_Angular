import { Component, OnInit } from '@angular/core';
import { PostService } from "app/post-page/post.service";
import { PostPreview } from "app/post-page/entity/PostPreview";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postPreviews : PostPreview[] = [];

  constructor(private postService: PostService) { 
    this.postPreviews = postService.getPostPreviews(); 
  }

  ngOnInit() {
  }

}
