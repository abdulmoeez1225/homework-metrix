import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {
  dataJson = [
    {
        "id": "ff890bef-633f-45c9-8f43-e82a24daf140",
        "language": "",
        "name": "Category name",
        "description": "",
        "color": "#21CC97",
        "dataType": "",
        "priority": "",
        "Sub": [
            {
                "id": "c7eaebaf-c7eb-4d0a-9fe6-2f31be3de1e1",
                "language": "",
                "name": "Sub category name",
                "description": "",
                "dataType": "",
                "priority": "",
                "subObject": [
                    {
                        "id": "b30ce833-7ca3-4bba-b83f-5d72cb014cf4",
                        "language": "",
                        "name": "Title goes here",
                        "description": "",
                        "dataType": "",
                        "priority": ""
                    }
                ]
            }
        ],
        "catagoryObject": [
            {
                "id": "47a2692c-90aa-4c58-89b7-3c300a51528f",
                "language": "",
                "name": "Title goes here",
                "description": "",
                "dataType": "",
                "priority": ""
            },
            {
                "id": "5c2b9c0c-218a-4e99-90db-b00bc83c818a",
                "language": "",
                "name": "Title goes here",
                "description": "",
                "dataType": "",
                "priority": ""
            },
            {
                "id": "5eb89f2f-8e35-48cf-ad59-afc8921e3c42",
                "language": "",
                "name": "Title goes here in this text area",
                "description": "",
                "dataType": "",
                "priority": ""
            }
        ]
    },
    {
        "id": "910435ff-1d21-43e5-baf4-8e80c9aaee35",
        "language": "",
        "name": "Category name",
        "description": "",
        "color": "#6599FF",
        "dataType": "",
        "priority": "",
        "Sub": [
            {
                "id": "784be283-2299-4634-8ebe-f82202a581ca",
                "language": "",
                "name": "Title goes here",
                "description": "",
                "dataType": "",
                "priority": "",
                "subObject": [
                    {
                        "id": "bfbb0066-6cf5-4266-b1c4-3bbb22eea019",
                        "language": "",
                        "name": "Title goes here",
                        "description": "",
                        "dataType": "",
                        "priority": ""
                    }
                ]
            }
        ],
        "catagoryObject": [
            {
                "id": "ce18da3d-65f3-4908-9420-1bb6cfb7ad88",
                "language": "",
                "name": "Title goes here",
                "description": "",
                "dataType": "",
                "priority": ""
            },
            {
                "id": "c76ede78-cb59-4e64-8bf8-87651a9877bc",
                "language": "",
                "name": "Title goes here",
                "description": "",
                "dataType": "",
                "priority": ""
            },
            {
                "id": "768064ae-9af2-4bb7-b611-292b47f7caa5",
                "language": "",
                "name": "Title goes here",
                "description": "",
                "dataType": "",
                "priority": ""
            }
        ]
    },
    {
        "id": "ed6a524c-b26e-4ab3-951a-11887912f624",
        "language": "",
        "name": "Category name",
        "description": "",
        "color": "#B71E3E",
        "dataType": "",
        "priority": "",
        "Sub": [
            {
                "id": "de27798a-0bca-46b4-b869-16007998fff2",
                "language": "",
                "name": "Sub category name",
                "description": "",
                "dataType": "",
                "priority": "",
                "subObject": [
                    {
                        "id": "ddcd4e45-4a0a-4888-8185-7c66532e984d",
                        "language": "",
                        "name": "Title goes here",
                        "description": "",
                        "dataType": "",
                        "priority": ""
                    },
                    {
                        "id": "1678274b-e9f8-4f6f-826d-379c55d30f40",
                        "language": "",
                        "name": "Title goes here",
                        "description": "",
                        "dataType": "",
                        "priority": ""
                    }
                ]
            }
        ],
        "catagoryObject": [
            {
                "id": "4e6a6d77-0d84-4b44-bd28-ffd22daf8a73",
                "language": "",
                "name": "Title goes here",
                "description": "",
                "dataType": "",
                "priority": ""
            },
            {
                "id": "a8425080-2c26-4bd5-9d3e-788d51079b0c",
                "language": "",
                "name": "Title goes here in this text area",
                "description": "",
                "dataType": "",
                "priority": ""
            },
            {
                "id": "fdbc5b5e-b3ea-4305-b980-a8fc113114ea",
                "language": "",
                "name": "Title goes here",
                "description": "",
                "dataType": "",
                "priority": ""
            }
        ]
    }
];
  constructor() { }
  getData(){
    return this.dataJson;
  }
}
