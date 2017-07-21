import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from "app/post-page/post.service";
import { ListGroup } from "app/entity/ListGroup";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
  providers: [PostService]
})
export class PostPageComponent implements OnInit {

  recentPosts:ListGroup;
  categories:ListGroup; 
  recentComments:ListGroup;

  constructor(private postService: PostService) {
    this.recentPosts = postService.getRecentPost();
    this.categories = postService.getCategories();
    this.recentComments = postService.getRecentComments();
  }

  ngOnInit() {
  }

  onLoadPreviewsByDate( date:Date = new Date() ){

  }

  onLoadPreviewsByCategory(category:String){

  }
  
}
