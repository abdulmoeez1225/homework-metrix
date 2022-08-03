import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Service {
  dataJson = [{
    "id": "8533358c-82fb-403c-99c1-86c7f228018d",
    "language": "",
    "name": "ajaskdl",
    "description": "",
    "color": "orange",
    "dataType": "",
    "priority": "",
    "Sub": [
      {
        "id": "0651e8f2-8f91-43e1-be7d-fc71a8b0f455",
        "language": "",
        "name": "hgjhg",
        "description": "",
        "dataType": "",
        "priority": "",
        "subObject": []
      }
    ],
    "catagoryObject": [
      {
        "id": "d58c2e5c-2258-43c2-9f3a-e78b4ee1a93a",
        "language": "",
        "name": "asad",
        "description": "",
        "dataType": "",
        "priority": ""
      },
      {
        "id": "8219e1ab-7c44-44d6-8b2d-b003c856d682",
        "language": "",
        "name": "Category name",
        "description": "",
        "dataType": "",
        "priority": ""
      }
    ]
  }];
  constructor() { }
  getData(){
    return this.dataJson;
  }
}
