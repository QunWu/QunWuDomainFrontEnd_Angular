import { Component, OnInit, Input } from '@angular/core';
import { SkillIntroSection } from "app/shared/entity/SkillIntroSection";

@Component({
  selector: 'app-content-section-with-img',
  templateUrl: './content-section-with-img.component.html',
  styleUrls: ['./content-section-with-img.component.css']
})
export class ContentSectionWithImgComponent implements OnInit {
  @Input() contentSection:SkillIntroSection= null;
  constructor() { }

  ngOnInit() {
  }

}
