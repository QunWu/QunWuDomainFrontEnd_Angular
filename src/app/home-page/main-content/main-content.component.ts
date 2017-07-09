import { Component, OnInit } from '@angular/core';
import { SkillIntroSection } from "app/shared/entity/SkillIntroSection";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  skillIntroSections : SkillIntroSection[] = [
    new SkillIntroSection("https://pbs.twimg.com/media/DD0zjheVwAUNZCk.jpg","Software Testing",[
      "Familiar with industrial testing life cycle. Designed and structured full stack testing for eBay motors selling. File few product bugs, improving the buyer experience. Code coverage of service testing reached 65%. Plus the UI testing, the code coverage of automation was figured out to be 75%. Be professional in JUnit, TestNG, Selenium and Appium."
    ]),
    new SkillIntroSection("https://pbs.twimg.com/media/DD0zjheVwAUNZCk.jpg","Web Application",[
      "Professional in web development, especially for J2EE. Experienced at  implementing RESTful API based on Spring. Deep understanding the  java frameworks Struts, Spring and Hibernate. PHP like WordPress and Drupal is another choice for me. AngularJS, jQuery/UI, Bootstrap gear me up for front end. If you are looking for a full stack programmer who can ramp up quickly, I’m the best candidate you want."
    ]),
    new SkillIntroSection("https://pbs.twimg.com/media/DD0zjheVwAUNZCk.jpg","Software Testing",[
      "Be passionate at android development and ever completed some applications to help me understand such as MiniFlickr. Interest in hybrid framework like Ionic to implement mobile application using html/css/js. Based on my professional knowledge in java and web development, i’m able to grow up quickly in a short-term training.",
      "Swift is my choice for IOS which is more like a object-oriented language than objective C. Before long, in this year, from Apr to Jun, I did help someone do the UI design for IOS app. Although the work is not heavy, I have learnt something about IOS development."
    ])
  ];

  constructor() { }

  ngOnInit() {
  }

}
