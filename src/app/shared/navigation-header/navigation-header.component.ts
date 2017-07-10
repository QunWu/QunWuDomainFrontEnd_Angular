import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.css']
})
export class NavigationHeaderComponent {
  @ViewChild("navbar") navbar :ElementRef;

  isNavBarResponsive : boolean= false;
  constructor(private renderer:Renderer2) { }

  clickBurgerNav(){
    if(this.isNavBarResponsive){
      this.renderer.addClass(this.navbar.nativeElement,"responsive");
    }else{
      this.renderer.removeClass(this.navbar.nativeElement,"responsive");
    }
    this.isNavBarResponsive = !this.isNavBarResponsive;
  }
}
