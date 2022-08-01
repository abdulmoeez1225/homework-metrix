import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-catagory-name',
  templateUrl: './catagory-name.component.html',
  styleUrls: ['./catagory-name.component.scss']
})
export class CatagoryNameComponent implements OnInit {

  colorArray: any = [
    { color: "#FB760D", class: "orange", active: true },
    { color: "#B71E3E", class: 'red', active: false },
    { color: "#21CC97", class: 'green', active: false },
    { color: "#6599FF", class: 'blue', active: false },
  ]

  catagoryForm = new FormGroup ({
    id: new FormControl(uuidv4()),
    language: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    color: new FormControl(''),
    dataType: new FormControl(''),
    priority: new FormControl('')
  })

  @Output() catagoryFormData: EventEmitter <any> = new EventEmitter;
  @Output() closeModelCatagory: EventEmitter <any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
    this.defaultcolorSelect()
  }

  defaultcolorSelect(){
    let item = this.colorArray[0].class

    this.catagoryForm.patchValue({
      color: item
     })
  }

  colorobject(item: any) {
  
    const getIndex = this.colorArray.indexOf(item); 
    this.colorArray = this.colorArray.map((item: any) => {
      return { ...item, active: false };
    })

    this.colorArray[getIndex].active = true;
    
    this.catagoryForm.patchValue({
      color: item.color
     })
  }

  saveData() {
    
    console.log("Form Data", this.catagoryForm.value);
    this.catagoryFormData.emit(this.catagoryForm.value)
    this.catagoryForm.reset();
  }

  cancelData() {
    this.closeModelCatagory.emit(false);
  }

}
