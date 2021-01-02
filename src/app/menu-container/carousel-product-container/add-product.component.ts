import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }
  slides=[
  {image:"./assets/1.png"},
  {image:"./assets/2.png"},
  {image:"./assets/3.png"},
  {image:"./assets/4.png"},
  {image:"./assets/5.png"},
  {image:"./assets/6.png"},
  {image:"./assets/7.png"},
];
  ngOnInit(): void {
  }
}
