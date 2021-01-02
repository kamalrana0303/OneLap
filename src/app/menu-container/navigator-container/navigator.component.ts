import { AfterViewInit, Component, OnInit } from '@angular/core';
import {delay, map, shareReplay} from 'rxjs/operators'
import {BreakpointObserver,Breakpoints, BreakpointState} from '@angular/cdk/layout'
import { Observable } from 'rxjs';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AddProductComponent } from '../carousel-product-container/add-product.component';
@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit, AfterViewInit {
  isHandset$:Observable<boolean>
  constructor(private breakPointObserver:BreakpointObserver,private overly:Overlay,private positionBuilder:OverlayPositionBuilder) { }

  ngOnInit(): void {
    this.isHandset$=this.breakPointObserver.observe(Breakpoints.Handset)
    .pipe(map( (result:BreakpointState)=>{
      return result.matches
    }
    ),shareReplay())
    
  }
  ngAfterViewInit(){
    
  }
  createCarousel(){
    const overlayRef=this.overly.create({
      hasBackdrop:true,
      positionStrategy:this.positionBuilder.global().centerHorizontally()
    })
    overlayRef.backdropClick().subscribe(()=>overlayRef.detach());
    overlayRef.keydownEvents().subscribe(()=>overlayRef.detach())
    const carousel=new ComponentPortal(AddProductComponent);
    overlayRef.attach(carousel);
  }

}
