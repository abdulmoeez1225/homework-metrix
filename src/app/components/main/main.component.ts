import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showCatagorynameModel = false;
  mainArray:any = [];
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
  }

  closeModelCatagory(bol:boolean){
    if(bol == false){
      this.showCatagorynameModel = false;
    }
  }

}
