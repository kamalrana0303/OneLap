import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vary-content',
  templateUrl: './vary-content.component.html',
  styleUrls: ['./vary-content.component.css']
})
export class VaryContentComponent implements OnInit {
  slide="./assets/1.png";
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      const imgsrc=this.slide.substring(this.slide.lastIndexOf('/')+1, this.slide.lastIndexOf('/')+2);
      let index=(+imgsrc)+1;
      if(index>7){
        index=1;
      }
      this.slide="./assets/"+index+".png"
    },3000);
  }

}
