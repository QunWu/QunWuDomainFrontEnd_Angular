import { Component } from '@angular/core';
import { SkillIntroSection, SkillSubject, UnorderList } from "app/profile-page/SkillIntroSection";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {

  skillIntroSections : SkillIntroSection[] = [
    new SkillIntroSection("Summary",[
      new SkillSubject("Web Application","assets/img/web-design.jpg",[
            "Professional in web development, especially for J2EE. Experienced at implementing RESTful API based on Spring. Deep understanding the  java frameworks Struts, Spring and Hibernate. AngularJS, jQuery/UI, Bootstrap gear me up for front end. If you are looking for a full stack programmer who can ramp up quickly, I’m the best candidate you want."
          ]
        ),
      new SkillSubject("Software Testing","assets/img/software-testing.jpg",[
            "Familiar with industrial testing life cycle. Designed and structured full stack testing for eBay motors selling. File few product bugs, improving the buyer experience. Code coverage of service testing reached 65%. Plus the UI testing, the code coverage of automation was figured out to be 75%. Be professional in JUnit, TestNG, Selenium and Appium."
          ]
        ),
      new SkillSubject("Java Programming","assets/img/java-logo.jpg",[
            "Own experience to solve real word problem and optimize program performance using multiple threads. If the company has the position about the concurrency programming, I would like to have a chance to overcome this challenge."
          ]
        )//end of one subject
      ]//end of subject list
    ),//end of one SkillIntroSection
    new SkillIntroSection("Skills",[
      new SkillSubject(undefined,undefined,[
            "BackEnd : Java, Python, PHP, Struts, Spring, Hibernate, Django, WordPress",
            "FrontEnd: HTML, CSS, JavaScript, TypeScript, AngularJS 4.X, Bootstrap, jQuery/UI, Ajax",
            "Database: MySQL, MongoDB",
            "Testing : Junit, Selenium, Appium, TestNG"
          ]
        )
      ]
    ),
    new SkillIntroSection("Work Experience",[
      new SkillSubject("Ebay-SellerHub SE",undefined,[
            "Duration : May 8, 2017 to present",
            "Skill Set: Java, Scala, SQL"
          ],
          [
            new UnorderList("Achivements",[
              "implemented AvailableQuantity service, showed how many items left for sell in order summary page",
              "architect new passion-store services, provided functions to access customized store and categories information from database directly",
              "coded bulk operaiton for mark pard service which to mark a bulk of orders as paid status"
            ])
          ]
        ),
      new SkillSubject("Ebay-Motors QE",undefined,[
            "Duration : Arip 18, 2016 to May 5, 2017",
            "Skill Set: Java, HTML, CSS, JS, Selenium, TestNG, Mobile Testing with Appium, JMeter for LnP",
          ],
          [
            new UnorderList("Achivements",[
              "Ebay-motors page selenium automation, covering motors home page, vehicles garage and search pages. Make sure web elements and data loading are correct",
              "Ebay-motors related search automation, ambiguous seach under home page and parsing the json response and ensuring the item category was selected properly after analyze, and category based infomation is returned as exptected ",
              "Ebay-motors services testing for Parts&Accessories, under motors category, composed the query with Make Model and Year constrains, and parsing json response to make sure the product is returned with expected data and compatible sections are composed",
              "Ebay-motors services testing for Tire Finder, under tire category, filtering the items by SectionWidth, AspectRatio and RimDiameter. Parsed json response and double check data with database",
              "Ebay-motors Android testing, using Appium. Coding and running mobile regression again real devices to emulate user behaviors, monitoring view content and app crashes"
            ])
          ]
        )
      ]
    ),
    new SkillIntroSection("Side Projects",[
      new SkillSubject("QunWuDomain",undefined,
          [
            "Duration: May 2017 to present",
            "Github For Front-End: https://github.com/QunWu/QunWuDomainFrontEnd_Angular.git",
            "Github For Back-End: https://github.com/QunWu/QunWuDomain.git",
            "Available Online: https://qunwudomain-fe.herokuapp.com/",
            "Desc: A project which presents personal information and provide funcitons for posts timeline"
          ],
          [
            new UnorderList(undefined,[
              "implement front end by HTML, Bootstrap, Angular 4.x and deployed via Heroku.",
              "architected back end by Spring Boot, built DB with MySQL",
              "showed self-introduction",
              "integrated with wechat public channel API which allowed to customize wechat public articles",
              "currently engaging into fully connecting both back and front ends, especially for user and post managements"
            ])
          ]
        ),
      new SkillSubject("LinkedIn Connector",undefined,
          [
            "Duration: July 2016 to Aug 2016",
            "Github: https://github.com/QunWu/AddConnect_Linkedin",
            "Desc: A project which auto login and add linkedin connect using selenium"
          ],
          [
            new UnorderList(undefined,[
              "implement front-end automation based on selenium",
              "able to auto login and direct to MyNetwork page, adding connects",
              "supported adding connections with multiple filters such as company constraints and location.",
              "multiple threads to work on different pages, so more efficiently",
            ])
          ]
        )
      ]
    ),
    new SkillIntroSection("Educations",[
      new SkillSubject("George Washington University" ,undefined,[
            "Washington DC, Aug 2014 to Dec 2015",
            "Master of Computer Science",
            "GPA: 3.7",
            "Special Topics: Full Stack Application Development, Java Concurrency, Web Data Exploration"
          ]
        ),
      new SkillSubject("Beijing Post&Telecom University" ,undefined,[
            "Beijing, China, Sep 2010 to June 2014",
            "Bachelor of E-Commerce",
            "GPA: 3.2",
            "Special Topics: Database Management; Internet Applications Development; Advanced Network Programming; Information System Management"
          ]
        ),
      ]
    ),
    new SkillIntroSection("Publications",[
      new SkillSubject("DISTRIBUTION OF TRADE-AREA BASED ON POIS" ,undefined,[
            "Publication/Publisher: DICTAP 2013",
            "Publication Date: Augest 2013",
            "Primary Author & Communicator: Qun Wu, Second Author: Xinchao Jiang, Instructor: Suoju He",
            "Issue Detail: DICTAP 2013, PP.229-233, Aug 2013"
          ]
        ),
      new SkillSubject("A CLUSTERING ALGORITHM TO FIND SOCIAL NETWORK USERS’ HAUNTS BASE ON DBSCAN", undefined,[
            "Publication/Publisher: CSAE 2013",
            "Publication Date: October 1st 2013",
            "Primary Author & Communicator: Xinchao Jiang, Second Author: Qun Wu, Instructor: Suoju He",
            "Issue Detail: CSAE 2013, PP. 222-226, Oct 1, 2013"
          ]
        ),
      ]
    )
  ];//end of SkillIntroSection[]

  constructor() { }
}
