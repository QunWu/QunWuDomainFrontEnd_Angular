import { Component } from '@angular/core';
import { DateUtils } from "app/shared/util/date-utils";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
  currH : number = 0;
  currM : number = 0;
  currS : number = 0;
  currWeekDay : number = 0;

  constructor() { 
    setInterval(this.startTime.bind(this),1000); 
  }

  //trigger sample: <body onload="startTime()">
  //reference: http://www.w3school.com.cn/js/js_obj_date.asp
  startTime(){
    var currDate=new Date()
    this.currH=currDate.getHours();
    this.currM=currDate.getMinutes();
    this.currS=currDate.getSeconds();
    this.currWeekDay = currDate.getDay();
    setTimeout(this.startTime, 1000);
  }

  /**
   * add a zero in front of numbers<10
   * @param i the number
   */
  checkTime(i:number){
    if (i<10) {return "0" + i} return i.toString();
  }

  /**
   * @param weekDayNum get from Data.getDay() --> sunday is 0, 1-6 is monday to saturday
   */
  getWeekDay( weekDayNum:number ){
    return DateUtils.weekdays[weekDayNum];
  }
}