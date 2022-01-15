import { Component, OnInit } from '@angular/core';
import { IData } from 'src/assets/mock-data/IData';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {
  
  private myData: IData;

  constructor(myData : IData) {
    this.myData = myData;
  }

  ngOnInit(): void {
  }

  getMyData(){
    return this.myData;
  }

}
