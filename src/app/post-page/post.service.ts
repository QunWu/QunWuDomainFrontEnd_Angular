import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { PostPreview } from "app/post-page/entity/PostPreview";
import { ListGroup, ListEntity } from "app/entity/ListGroup";

@Injectable()
export class PostService {
    
  constructor(private http:Http){}

  private recentPosts: ListGroup = new ListGroup([
    new ListEntity("六四，一个我认为的客观的陈述","http://qunwudomain.com/2017/07/14/%E5%85%AD%E5%9B%9B%EF%BC%8C%E4%B8%80%E4%B8%AA%E6%88%91%E8%AE%A4%E4%B8%BA%E7%9A%84%E5%AE%A2%E8%A7%82%E7%9A%84%E9%99%88%E8%BF%B0/"),
    new ListEntity("Industrial Tech","http://qunwudomain.com/2017/06/01/497/"),
    new ListEntity("fasterXML trips","http://qunwudomain.com/2017/05/30/fasterxml-trips/"),
    new ListEntity("Auto-boxing and Java Generic Type","http://qunwudomain.com/2017/04/27/auto-boxing-and-java-generic-type/"),
    new ListEntity("BootStrap+JS tips:","http://qunwudomain.com/2017/04/12/bootstrapjs-tips/")
  ],"RECENT POSTS");

  private categories:ListGroup = new ListGroup([
    new ListEntity("Back-end","http://qunwudomain.com/category/technique/back-end/"),
    new ListEntity("Daily Life","http://qunwudomain.com/category/daily-life/"),
    new ListEntity("Front-end","http://qunwudomain.com/category/technique/front-end/"),
    new ListEntity("Git","http://qunwudomain.com/category/technique/work/git/"),
    new ListEntity("Techique","http://qunwudomain.com/category/technique/"),
    new ListEntity("Test Config","http://qunwudomain.com/category/technique/work/test-config/"),
    new ListEntity("Uncategorized","http://qunwudomain.com/category/uncategorized/"),
    new ListEntity("Work","http://qunwudomain.com/category/technique/work/")
  ],"CATEGORIES");

  private recentComments:ListGroup = new ListGroup([],"RECENT COMMENTS");

  private postPreviews: PostPreview[] = [
    new PostPreview(
      "test",
      "六四，一个我认为的客观的陈述", 
      new Date(),
      ["Uncategorized"],
      "已经附上视频，六四四君子的侯德健在广场一直待在六点半，没有发现有人被打死。我在本文附上了其中最后说服力的一条评论，如下： “6月3日，木樨地，38军接到死命令必须赶到广场，但是被学生工人强力拦截，于是开枪。死亡人数大概在150人左右。6月4日凌晨天安门清场，没有杀人。3日4日暴民杀死烧死的解放军战士约20人，许多的确是被打死没开枪的。据说，38军的开枪有报复成分。整件事情今天已经很清楚了，80年代是共产党右派自由派执政，社会比较自由开放，但是西方的确试图颠覆共产党。邓小平特别敏锐感觉情况不对了，才铁腕镇压。虽然学生游行是以反腐败为号召，并且很快得到了广大人民的支持，",
      "http://qunwudomain.com/2017/07/14/%e5%85%ad%e5%9b%9b%ef%bc%8c%e4%b8%80%e4%b8%aa%e6%88%91%e8%ae%a4%e4%b8%ba%e7%9a%84%e5%ae%a2%e8%a7%82%e7%9a%84%e9%99%88%e8%bf%b0/"
    )
  ];

  private selectedPost: PostPreview = null;

  getPostPreviews() {
    return this.postPreviews;
  }

  getPostById(postId:String){
    return this.http.get("assets/"+postId+".html");
  }

  getRecentPost():ListGroup{
    return this.recentPosts;
  }

  getCategories():ListGroup{
    return this.categories;
  }

  getRecentComments():ListGroup{
    return this.recentComments;
  }
}