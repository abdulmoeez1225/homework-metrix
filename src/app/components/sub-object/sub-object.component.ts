import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-sub-object',
  templateUrl: './sub-object.component.html',
  styleUrls: ['./sub-object.component.scss']
})
export class SubObjectComponent implements OnInit {

 
  formObjectSub = new FormGroup ({
    id: new FormControl(uuidv4()),
    language: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    dataType: new FormControl(''),
    priority: new FormControl('')
  })

  @Output() objectsubData: EventEmitter <any> = new EventEmitter;
  @Output() closesubObjectModel: EventEmitter <any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  saveData() {
    
    console.log("Form Data", this.formObjectSub.value);
    this.objectsubData.emit(this.formObjectSub.value)
    this.formObjectSub.reset();
  }

  cancelData() {
    this.closesubObjectModel.emit(false);
  }

}
