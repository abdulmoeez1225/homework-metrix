import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
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
  constructor() { }

  ngOnInit(): void {
  }

  openModelCatagory() {
    this.showCatagorynameModel = !this.showCatagorynameModel;
    this.showOverlay = !this.showOverlay
    this.hidecatObj = true
  }

  catagoryFormData(data: any) {
    data.Sub = [];
    data.catagoryObject = [];
    this.mainArray.push(data);
    this.showCatagorynameModel = false;
    this.showOverlay = !this.showOverlay

  }

  opencatagoryobject(data: any) {
    this.showOverlay = !this.showOverlay
    this.globelCatagoryId = data;
    this.showCatagoryObjectModel = !this.showCatagoryObjectModel

  }
  objectcatagoryData(data: any) {
    let dataofid = this.mainArray.find((idData: any) => idData.id == this.globelCatagoryId);
    this.mainArray[this.mainArray.indexOf(dataofid)].catagoryObject.push(data);
    this.hidecatObj = false
    console.log("data received in parent", this.mainArray)
    this.showCatagoryObjectModel = false;
    this.showOverlay = !this.showOverlay

  }

  closeModelObject(bol: boolean) {
    if (bol == false) {
      this.showCatagoryObjectModel = false;
      this.showOverlay = !this.showOverlay
    }
  }

  closeModelCatagory(bol: boolean) {
    if (bol == false) {
      this.showCatagorynameModel = false;
      this.showOverlay = !this.showOverlay
    }
  }

  opensubCatagory(data: any) {
    this.globelCatagoryId = data;
    this.showsubModel = !this.showsubModel;
    this.hidesubobjbtn = true;
  }

  subFormData(data: any) {
    let dataofid = this.mainArray.find((idData: any) => idData.id == this.globelCatagoryId);
    data.subObject = [];
    this.mainArray[this.mainArray.indexOf(dataofid)].Sub.push(data);
    console.log(data, "=<data", "array", this.mainArray);
    this.showsubModel = false;
  }

  closeModelSub(bol: boolean) {
    if (bol == false) {
      this.showsubModel = false;
      this.showOverlay = !this.showOverlay
    }
  }

  opensubobject(id1: any, id2: any, indexcat: any) {
    this.globelCatagoryId = id1;
    this.globalIdSubCatagory = id2;
    this.indexofcatagory = indexcat;
    this.showSubobjectModel = !this.showSubobjectModel;
    this.showOverlay = !this.showOverlay
  }

  objectsubData(data: any) {

    let dataofid = this.mainArray.find((idData: any) => idData.id == this.globelCatagoryId);
    let dataofid2 = this.mainArray[this.indexofcatagory].Sub.find((idData: any) => idData.id == this.globalIdSubCatagory);

    let maain = this.mainArray[this.mainArray.indexOf(dataofid)].Sub;
    maain[maain.indexOf(dataofid2)].subObject.push(data);
    this.showSubobjectModel = false;

    this.hidesubobjbtn = false;
    this.showOverlay = !this.showOverlay
  }

  closesubObjectModel(bol: any) {
    if (bol == false) {
      this.showSubobjectModel = false;
      this.showOverlay = !this.showOverlay
    }
  }
}
