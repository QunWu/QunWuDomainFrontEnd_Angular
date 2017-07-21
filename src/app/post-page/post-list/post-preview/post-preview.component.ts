import { Component, OnInit, Input } from '@angular/core';
import { PostPreview } from "app/post-page/entity/PostPreview";

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit {

  @Input() postPreview: PostPreview;
  
  constructor() { }

  ngOnInit() {
    console.log(this.postPreview);
  }

}
