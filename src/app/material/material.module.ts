import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from "@angular/material/progress-bar"
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from "@angular/material/select"
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table'
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort";
import {MatDatepickerModule} from "@angular/material/datepicker"
import {MatNativeDateModule} from '@angular/material/core'
export const material=[
  MatNativeDateModule,
  MatDatepickerModule,
  MatSortModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatCardModule,
  MatToolbarModule,
  MatListModule,
  MatTableModule,
  MatIconModule
]
@NgModule({
  exports:[
    material
  ],
  imports: [
   material
  ]
})
export class MaterialModule { }
