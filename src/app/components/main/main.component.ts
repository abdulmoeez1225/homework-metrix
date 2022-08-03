import { Component, OnInit } from '@angular/core';
import { Service } from './maindata.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [Service]
})
export class MainComponent implements OnInit {
  showCatagoryNameModel = false;
  showOverlay = false
  mainArray: any = [];
  showSubModel = false
  showCatagoryObjectModel = false;
  showSubObjectModel = false;
  globelCatagoryId: any;
  globalIdSubCatagory: any
  indexOfCatagory: any
  indexOfSub: any

  constructor(private data: Service) { 
    this.mainArray = data.getData()
  }

  ngOnInit(): void {
  }

  openModelCatagory() {
    this.showCatagoryNameModel = !this.showCatagoryNameModel;
    this.showOverlay = true
  }

  catagoryFormData(data: any) {
    data.Sub = [];
    data.catagoryObject = [];
    this.mainArray.push(data);
    this.showCatagoryNameModel = false;
    this.showOverlay = false;
  }

  openCatagoryObject(data: any) {
    this.showOverlay = true;
    this.globelCatagoryId = data;
    this.showCatagoryObjectModel = !this.showCatagoryObjectModel
  }
  objectCatagoryData(data: any) {
    let dataofid = this.mainArray.find((idData: any) => idData.id == this.globelCatagoryId);
    this.mainArray[this.mainArray.indexOf(dataofid)].catagoryObject.push(data);
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
      this.showCatagoryNameModel = false;
      this.showOverlay = false
    }
  }

  opensubCatagory(data: any) {
    this.globelCatagoryId = data;
    this.showSubModel = true;
    this.showOverlay = true;
  }

  subFormData(data: any) {
    let dataofid = this.mainArray.find((idData: any) => idData.id == this.globelCatagoryId);
    data.subObject = [];
    this.mainArray[this.mainArray.indexOf(dataofid)].Sub.push(data);
    this.showSubModel = false;
    this.showOverlay = false;
  }

  closeModelSub(bol: boolean) {
    if (bol == false) {
      this.showSubModel = false;
      this.showOverlay = false;
    }
  }

  opensubobject(id1: any, id2: any, indexcat: any) {

    let data = this.mainArray[indexcat].Sub.find((idData: any) => idData.id == id2);
    if(this.mainArray[indexcat].catagoryObject.length != data.subObject.length){
    this.globelCatagoryId = id1;
    this.globalIdSubCatagory = id2;
    this.indexOfCatagory = indexcat;
    this.showSubObjectModel = !this.showSubObjectModel;
    this.showOverlay = true;
    }
  }

  objectSubData(data: any) {

    let dataOfid = this.mainArray.find((idData: any) => idData.id == this.globelCatagoryId);
    let dataOfid2 = this.mainArray[this.indexOfCatagory].Sub.find((idData: any) => idData.id == this.globalIdSubCatagory);
    let maain = this.mainArray[this.mainArray.indexOf(dataOfid)].Sub;
    maain[maain.indexOf(dataOfid2)].subObject.push(data);
    this.showSubObjectModel = false;
    this.showOverlay = false
  }

  closeSubObjectModel(bol: any) {
    if (bol == false) {
      this.showSubObjectModel = false;
      this.showOverlay = false;
    }
  }
}
