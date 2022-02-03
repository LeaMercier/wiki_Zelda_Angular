import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IData } from 'src/app/IData';
import { DataMockService } from '../data-mock.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {

  @Input() 
  myData!: IData;
  getCreature : boolean = false;

  constructor(
    private dataMockService : DataMockService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }


}
