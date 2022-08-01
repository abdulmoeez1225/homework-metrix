import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showCatagorynameModel = false;
  mainArray:any = [];
  showsubModel = false
  constructor() { }

  ngOnInit(): void {
  }

  openModelCatagory(){
    this.showCatagorynameModel = !this.showCatagorynameModel;
  }

  catagoryFormData(data:any){
    data.Sub = [];
    this.mainArray.push(data);
    this.showCatagorynameModel = false;
    console.log("data received", this.mainArray)
  }

  closeModelCatagory(bol:boolean){
    if(bol == false){
      this.showCatagorynameModel = false;
    }
  }

  opensubCatagory(){
    this.showsubModel = !this.showsubModel;
  }

  subFormData(data:any){
    

    this.showsubModel = false;
  }

  closeModelSub(bol:boolean){
    if(bol == false){
    this.showsubModel = false;
    }
  }
}
