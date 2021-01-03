import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService, devices } from 'src/app/contact.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})

export class UpdateProductComponent implements OnInit {
  updated:boolean=false;
  devices:devices={
    id:-1,
    name:'',
    attributes:{},
    uniqueId:''
  };
  
  fg:FormGroup;
  constructor(private route:ActivatedRoute, private fb:FormBuilder, private service:ContactService, private router:Router) { 
    
  }

  ngOnInit(): void {
   const id=this.route.params["_value"].id;
    console.log(id+" is id")
     const uniqueId=this.route.snapshot.queryParamMap.get('uniqueId')
     const attributes=this.route.snapshot.queryParamMap.get("attributes")
     const name =this.route.snapshot.queryParamMap.get('name')
     this.devices=Object.assign({},{id:id,attributes:attributes,name:name,uniqueId:uniqueId})
  
    this.fg=this.fb.group({
      name:[this.devices.name,Validators.required],
      uniqueId:[this.devices.uniqueId,Validators.required],
      id:[id],
      attributes:this.fb.group({
        height:[,[Validators.required,Validators.min(5)]],
        
      })
    
    });
  }
  update(){
    this.service.update(this.fg.value).subscribe(res=>{
      
      if(!!res){
        this.updated=true;
        this.router.navigate(["menu/devices"]);
      }else{
        this.updated=false;
      }
    });
  }

}
