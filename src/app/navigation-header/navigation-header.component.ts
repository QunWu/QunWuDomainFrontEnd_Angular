import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.css']
})
export class NavigationHeaderComponent implements OnInit{
  @ViewChild("navbar") navbar: ElementRef;

  halfScreenHeight : number = 0;
  isNavBarResponsive : boolean= true;

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
    this.halfScreenHeight = $(window).height()/2;
    $(window).scroll(function () {
      if($(window).scrollTop()>=this.halfScreenHeight){
        $("#header").css({backgroundColor: 'black',opacity:0.8});
      }else
        $("#header").css({backgroundColor:'transparent',opacity:1});
    }.bind(this));
  }

  clickBurgerNav(){
    if(this.isNavBarResponsive){
      this.renderer.addClass(this.navbar.nativeElement,"responsive");
    }else{
      this.renderer.removeClass(this.navbar.nativeElement,"responsive");
    }
    this.isNavBarResponsive = !this.isNavBarResponsive;
  }
}
