import { Component, OnInit} from '@angular/core';
import { PostService } from "app/post-page/post.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-post-fullview',
  templateUrl: './post-fullview.component.html',
  styleUrls: ['./post-fullview.component.css']
})
export class PostFullviewComponent implements OnInit {

  postId : String;
  postPageString : String;

  constructor(private postService: PostService,private route: ActivatedRoute,private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.postId = params['postId'];
        this.postService.getPostById(this.postId).subscribe(
          (value) => {
            this.updatePostDynamically(value.text());
          },
          (error) => {console.log(error);}
        );
      }
    );
  }

  private updatePostDynamically(htmlString:String){
    $('#dynamicPost').html(htmlString);
  }
}
