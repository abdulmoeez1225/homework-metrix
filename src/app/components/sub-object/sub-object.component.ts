import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

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
  @Output() objectSubData: EventEmitter <any> = new EventEmitter;
  @Output() closeSubObjectModel: EventEmitter <any> = new EventEmitter;

  dropdownSettings!:IDropdownSettings;
  dropdownSettings2!:IDropdownSettings;
  dropdownList:{ item_id: number, item_text:string}[] = [];
  dropdownList2:{ item_id: number, item_text:string}[] = [];
  selectedItems:{ item_id: number, item_text: string }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.dropdownList2 = [
      { item_id: 1, item_text: 'Persona 1' },
      { item_id: 2, item_text: 'Persona 2' },
      { item_id: 3, item_text: 'Persona 3' },
      { item_id: 4, item_text: 'Persona 4' },
    ];


    this.dropdownList = [
      { item_id: 1, item_text: 'Role 1' },
      { item_id: 2, item_text: 'Role 2' },
      { item_id: 3, item_text: 'Role 3' },
      { item_id: 4, item_text: 'Role 4' },
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.dropdownSettings2 = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  saveData() {
    this.objectSubData.emit(this.formObjectSub.value)
    this.formObjectSub.reset();
  }

  cancelData() {
    this.closeSubObjectModel.emit(false);
  }
}
