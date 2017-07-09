import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  months :String[]= ["","January","February","March","April","May","June","July","Augest","September","October","November","December"]
  daysForMonths:number[] = [31,-1,31,30,31,30,31,31,30,31,30,31];
  weekdays:String[] = ["Su","Mo","Tu","We","Th","Fr","Sa"];
  monthsInYear = 12;//count from 0

  currH : String = "0";
  currM : String = "0";
  currS : String = "0";

  /** for calender title*/
  increaseMonths : number = 0;
  currYear:number = 0;
  currMonth:number = 0;
  selectedYear : number = 2017;
  selectedMonth : number = 0;

  /** for calender days */
  daysForMonth : number[] = null;

  constructor() {}

  ngOnInit() {
    /**for calender title */
    var currData = new Date();
    //in Data(), Aguest = 7
    this.currMonth = currData.getMonth()+1;
    this.currYear = currData.getFullYear();
    this.selectedYear = this.currYear;
    this.selectedMonth = this.currMonth;

    this.initCalenderBody(this.currMonth,this.currYear);
  }

  prev(){
    this.updateSelectedMonthAndYear(--this.increaseMonths);
    this.initCalenderBody(this.selectedMonth,this.selectedYear);
  }

  next(){
    this.updateSelectedMonthAndYear(++this.increaseMonths);
    this.initCalenderBody(this.selectedMonth,this.selectedYear);
  }
  /*
  in Data(), Ang is 7, Sep is 8. But the month passed in real month number, Augest is 8, Sep is 9 ==> the difference is 1
  0 to 6 --> the weekday of the first day of a month, 0 present Sunday, 1-6 present monday to saturday
  */
  initCalenderBody(realMonth:number,year:number){
    var firstDay = new Date(year,realMonth-1,1);
    var prefix = firstDay.getDay();
    //how many days in a month
    var numOfDays= this.getDaysForParticularMonth(realMonth,year);
    this.daysForMonth = new Array(prefix+numOfDays);
    for(var i = 0 ; i < prefix ; i++){
      this.daysForMonth[i] = undefined;
    }
    for(var i = prefix ; i < this.daysForMonth.length ; i++){
      this.daysForMonth[i] = i+1-prefix;
    }
  }

  updateSelectedMonthAndYear(increasedMonths:number){
    var increasedYear:number = (increasedMonths/this.monthsInYear)|0;
    increasedMonths = increasedMonths%this.monthsInYear;
    
    if(this.currMonth+increasedMonths<=0){
      this.selectedMonth = this.currMonth+increasedMonths+this.monthsInYear;
      increasedYear--;
    }else if( this.currMonth+increasedMonths > this.monthsInYear){
      this.selectedMonth = this.currMonth+increasedMonths-this.monthsInYear;
      increasedYear++;
    }else{
      this.selectedMonth = this.currMonth+increasedMonths;
    }

    this.selectedYear=this.currYear+increasedYear;
  }

/**
 * February - 28 days in a common year and 29 days in leap years
      Leap year:
        if (year is not divisible by 4) then (it is a common year)
        else if (year is not divisible by 100) then (it is a leap year)
        else if (year is not divisible by 400) then (it is a common year)
        else (it is a leap year)

 * @param monthInDataFormat     got by Data.getMonth() --> 1 less than the real month number 
 * @param year 
 */
  getDaysForParticularMonth(realMonth:number, year:number){
    if(realMonth!==2)
      return this.daysForMonths[realMonth-1];
    else{
      if(year%4===0){
        if(year%100 !== 0)
          return 29;
        else if(year%400 !== 0)
          return 28;
        else
          return 29;
      }else
        return 28; 
    }
  }
  //trigger : <body onload="startTime()">
  //reference: http://www.w3school.com.cn/js/js_obj_date.asp
  startTime(){
    var currDate=new Date()
    // add a zero in front of numbers<10
    this.currH=this.checkTime(currDate.getHours());
    this.currM=this.checkTime(currDate.getMinutes());
    this.currS=this.checkTime(currDate.getSeconds());
    // document.getElementById('txt').innerHTML=h+":"+m+":"+s
    return setTimeout('startTime()',1000);
  }

  checkTime(i){
    if (i<10) {i="0" + i} return i
  }

}
