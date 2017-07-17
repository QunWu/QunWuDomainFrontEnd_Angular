import { Component, OnInit } from '@angular/core';
import { ListGroup, ListEntity } from "app/shared/entity/ListGroup";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  recentPosts:ListGroup = new ListGroup([
    new ListEntity("六四，一个我认为的客观的陈述","http://qunwudomain.com/2017/07/14/%E5%85%AD%E5%9B%9B%EF%BC%8C%E4%B8%80%E4%B8%AA%E6%88%91%E8%AE%A4%E4%B8%BA%E7%9A%84%E5%AE%A2%E8%A7%82%E7%9A%84%E9%99%88%E8%BF%B0/"),
    new ListEntity("Industrial Tech","http://qunwudomain.com/2017/06/01/497/"),
    new ListEntity("fasterXML trips","http://qunwudomain.com/2017/05/30/fasterxml-trips/"),
    new ListEntity("Auto-boxing and Java Generic Type","http://qunwudomain.com/2017/04/27/auto-boxing-and-java-generic-type/"),
    new ListEntity("BootStrap+JS tips:","http://qunwudomain.com/2017/04/12/bootstrapjs-tips/")
  ],"RECENT POSTS");
  categories:ListGroup = new ListGroup([
    new ListEntity("Back-end","http://qunwudomain.com/category/technique/back-end/"),
    new ListEntity("Daily Life","http://qunwudomain.com/category/daily-life/"),
    new ListEntity("Front-end","http://qunwudomain.com/category/technique/front-end/"),
    new ListEntity("Git","http://qunwudomain.com/category/technique/work/git/"),
    new ListEntity("Techique","http://qunwudomain.com/category/technique/"),
    new ListEntity("Test Config","http://qunwudomain.com/category/technique/work/test-config/"),
    new ListEntity("Uncategorized","http://qunwudomain.com/category/uncategorized/"),
    new ListEntity("Work","http://qunwudomain.com/category/technique/work/")
  ],"CATEGORIES");
  recentComments:ListGroup = new ListGroup([],"RECENT COMMENTS");
  constructor() { }

  ngOnInit() {
  }

}
