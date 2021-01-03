import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { NavigatorComponent } from './navigator-container/navigator.component';
import { MaterialModule } from '../material/material.module';
import { MenuRoutingModule } from './menu-routing.module';
import { ProductComponent } from './product-container/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { AddProductComponent } from './carousel-product-container/add-product.component';
import { UpdateProductComponent } from './update-container/update-product.component';
import { MatCarouselModule } from 'ng-mat-carousel';
import { VaryContentComponent } from './vary-content-cotainer/vary-content.component';

@NgModule({
  declarations: [
    MenuComponent, 
    NavigatorComponent, 
    ProductComponent, UpdateProductComponent,
    AddProductComponent,
    VaryContentComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MenuRoutingModule,
    FormsModule,
    OverlayModule,
    MatCarouselModule.forRoot(),
  ]
})
export class MenuModule { }
