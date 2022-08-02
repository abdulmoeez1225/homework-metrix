import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-object-catagory',
  templateUrl: './object-catagory.component.html',
  styleUrls: ['./object-catagory.component.scss']
})
export class ObjectCatagoryComponent implements OnInit {


  formObjectCatagory = new FormGroup ({
    id: new FormControl(uuidv4()),
    language: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    dataType: new FormControl(''),
    priority: new FormControl('')
  })

  @Output() objectcatagoryData: EventEmitter <any> = new EventEmitter;
  @Output() closeModelObject: EventEmitter <any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  saveData() {
    
    console.log("Form Data", this.formObjectCatagory.value);
    this.objectcatagoryData.emit(this.formObjectCatagory.value)
    this.formObjectCatagory.reset();
  }

  cancelData() {
    this.closeModelObject.emit(false);
  }

}
