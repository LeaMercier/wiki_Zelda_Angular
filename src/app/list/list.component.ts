import { Component, OnInit } from '@angular/core';
import { IData } from 'src/assets/mock-data/IData';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  private dataList : IData[] = [];
  
  constructor() {}

  ngOnInit(): void {
  }

}
