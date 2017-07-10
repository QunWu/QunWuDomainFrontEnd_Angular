import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.css']
})
export class NavigationHeaderComponent implements OnInit{
  @ViewChild("navbar") navbar: ElementRef;

  isNavBarResponsive : boolean= true;
  constructor(private renderer:Renderer2) { }
  ngOnInit(): void {
    // console.log($(window).height());
    $(window).scroll(function (event) {
      // var scroll = $(window).scrollTop();
      if($(window).scrollTop()>=$(window).height()/2){
        $("#header").css({backgroundColor: 'black',opacity:0.8});
      }else
        $("#header").css({backgroundColor:'transparent',opacity:1});
    });
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
