import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavigatorComponent } from './navigator-container/navigator.component';

import { ProductComponent } from './product-container/product.component';
import { ProductResolverResolver } from './product-container/product-resolver.resolver';

import { UpdateProductComponent } from './update-container/update-product.component';
import { VaryContentComponent } from './vary-content-cotainer/vary-content.component';

export const menuRoutes:Routes=[
  {
    path:'', component: NavigatorComponent,
    children:[
      {
        path:'devices', component:ProductComponent, resolve:{products:ProductResolverResolver}
      },
      {
        path:'update/:id', component:UpdateProductComponent
      }
    ]
  },
  {
    path:'vary',component:VaryContentComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(menuRoutes)
  ],
  exports:[RouterModule]
})
export class MenuRoutingModule { }
