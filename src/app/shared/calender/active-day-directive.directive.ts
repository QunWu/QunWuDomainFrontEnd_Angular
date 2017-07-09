import { Directive, HostBinding, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appActiveDayDirective]'
})
export class ActiveDayDirectiveDirective implements OnInit,OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.isActive=false;
    this.updateActive();
  }
  ngOnInit(): void {
    this.updateActive();
  }
  @HostBinding("class.active") isActive = false;
  @Input() dataInfo:{selectedMonth:number,selectedYear:number,innerText:number,currMonth:number,currYear:number, currDay:number} = null;
  constructor() {}

  updateActive(){
    if(
      this.dataInfo.selectedYear==this.dataInfo.currYear&&
      this.dataInfo.selectedMonth==this.dataInfo.currMonth&&
      this.dataInfo.innerText===this.dataInfo.currDay
    ){
      this.isActive = true;
    }
  }
}
