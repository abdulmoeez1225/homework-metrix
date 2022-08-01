import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showCatagorynameModel = false;
  constructor() { }

  ngOnInit(): void {
  }

  openModelCatagory(){
    this.showCatagorynameModel = !this.showCatagorynameModel;
  }

}
