import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ContactService, devices } from 'src/app/contact.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit ,AfterViewInit{
  regional:Array<devices>;
  data: MatTableDataSource<devices>;
  searchKey:string;
  @ViewChild(MatSort,{static:true}) sort:MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator:MatPaginator
  displayedColumns:string[]=['id','attributes', 'name', 'uniqueId',"actions"];
  
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.regional=this.route.snapshot.data['products'];
    this.data=new MatTableDataSource(this.regional)
    this.data.sort = this.sort;
    this.data.paginator=this.paginator;
    
   
  }
  update(val){
    console.log(val)
    this.router.navigate(['menu/update',val.id],{
      queryParams:{uniqueId:val.uniqueId, attributes:val.attributes,name:val.name}
    });
  }
  ngAfterViewInit() {
    
  }
  

}
