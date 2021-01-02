import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { Event } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoading:boolean=false;
  constructor(private router:Router){
    this.router.events.subscribe((routerEvent)=>this.checkRouterEvent(routerEvent));
  }
  ngOnInit(): void {
    
   
  }
  title = 'management';
  checkRouterEvent(event:Event){
    if(event instanceof NavigationStart){
      this.isLoading=true;
      console.log("navigation start: "+this.isLoading)
     
    }
    if(event instanceof NavigationCancel ||
      event instanceof NavigationEnd ||
      event instanceof NavigationError){
        this.isLoading=false;
        console.log("navigation end: "+this.isLoading)
        
    }
  }
}
