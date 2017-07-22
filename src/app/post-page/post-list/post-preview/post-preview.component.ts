import { Component, Input } from '@angular/core';
import { PostPreview } from "app/post-page/entity/PostPreview";

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {

  @Input() postPreview: PostPreview;
  
  constructor() { }

}
