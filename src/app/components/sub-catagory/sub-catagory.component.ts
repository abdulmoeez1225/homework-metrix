import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-sub-catagory',
  templateUrl: './sub-catagory.component.html',
  styleUrls: ['./sub-catagory.component.scss']
})
export class SubCatagoryComponent implements OnInit {

  subForm = new FormGroup ({
    id: new FormControl(uuidv4()),
    language: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    dataType: new FormControl(''),
    priority: new FormControl('')
  });

  @Output() subFormData: EventEmitter <any> = new EventEmitter;
  @Output() closeModelSub: EventEmitter <any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  saveData() {
    console.log("Form Data", this.subForm.value);
    this.subFormData.emit(this.subForm.value)
    this.subForm.reset();
  }

  cancelData() {
    this.closeModelSub.emit(false);
  }

}


