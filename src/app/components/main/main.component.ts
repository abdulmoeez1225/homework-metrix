import { Component, OnInit } from '@angular/core';
import { Service } from './maindata.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [Service]
})
export class MainComponent implements OnInit {
  showCatagorynameModel = false;
  showOverlay = false
  mainArray: any = [];
  showsubModel = false
  showCatagoryObjectModel = false;
  showSubobjectModel = false;
  globelCatagoryId: any;
  globalIdSubCatagory: any
  indexofcatagory: any
  indexofSub: any
  hidesubobjbtn = true
  hidecatObj = true
  constructor(private data: Service) { 
    this.mainArray = data.getData()
  }

  ngOnInit(): void {

  }

  openModelCatagory() {
    this.showCatagorynameModel = !this.showCatagorynameModel;
    this.showOverlay = true
    this.hidecatObj = true
  }

  catagoryFormData(data: any) {
    data.Sub = [];
    data.catagoryObject = [];
    this.mainArray.push(data);
    this.showCatagorynameModel = false;
    this.showOverlay = false;

  }

  opencatagoryobject(data: any) {
    this.showOverlay = true;
    this.globelCatagoryId = data;
    this.showCatagoryObjectModel = !this.showCatagoryObjectModel

  }
  objectcatagoryData(data: any) {
    let dataofid = this.mainArray.find((idData: any) => idData.id == this.globelCatagoryId);
    this.mainArray[this.mainArray.indexOf(dataofid)].catagoryObject.push(data);
    this.hidecatObj = false
    console.log("data received in parent", this.mainArray)
    this.showCatagoryObjectModel = false;
    this.showOverlay = false;

  }

  closeModelObject(bol: boolean) {
    if (bol == false) {
      this.showCatagoryObjectModel = false;
      this.showOverlay = false;
    }
  }

  closeModelCatagory(bol: boolean) {
    if (bol == false) {
      this.showCatagorynameModel = false;
      this.showOverlay = false
    }
  }

  opensubCatagory(data: any) {
    this.globelCatagoryId = data;
    this.showsubModel = true;
    this.hidesubobjbtn = true;
  }

  subFormData(data: any) {
    let dataofid = this.mainArray.find((idData: any) => idData.id == this.globelCatagoryId);
    data.subObject = [];
    this.mainArray[this.mainArray.indexOf(dataofid)].Sub.push(data);
    console.log(data, "=<data", "array", this.mainArray);
    this.showsubModel = false;
    this.showOverlay = false;
  }

  closeModelSub(bol: boolean) {
    if (bol == false) {
      this.showsubModel = false;
      this.showOverlay = false;
    }
  }

  opensubobject(id1: any, id2: any, indexcat: any) {
    this.globelCatagoryId = id1;
    this.globalIdSubCatagory = id2;
    this.indexofcatagory = indexcat;
    this.showSubobjectModel = !this.showSubobjectModel;
    this.showOverlay = true;
  }

  objectsubData(data: any) {

    let dataofid = this.mainArray.find((idData: any) => idData.id == this.globelCatagoryId);
    let dataofid2 = this.mainArray[this.indexofcatagory].Sub.find((idData: any) => idData.id == this.globalIdSubCatagory);

    let maain = this.mainArray[this.mainArray.indexOf(dataofid)].Sub;
    maain[maain.indexOf(dataofid2)].subObject.push(data);
    this.showSubobjectModel = false;

    this.hidesubobjbtn = false;
    this.showOverlay = false
  }

  closesubObjectModel(bol: any) {
    if (bol == false) {
      this.showSubobjectModel = false;
      this.showOverlay = false;
    }
  }
}
