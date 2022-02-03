import { Component, Input, OnInit } from '@angular/core';
import { IData } from 'src/app/IData';
import { DataMockService } from 'src/app/data-mock.service';
import { ActivatedRoute } from '@angular/router';
import { DetailItemComponent } from 'src/app/detail-item/detail-item.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  @Input()
  dataList !: IData[];
  
  constructor(private dataMockService : DataMockService, private route: ActivatedRoute) {
    this.dataMockService = new DataMockService();
  }

  ngOnInit(): void {
   this.route.url.subscribe(res => {
     res.forEach(path => {
       if (path.toString() == 'monsters') {
        this.getMonsters();
       } else {
        this.getCreatures();
       }
     })
   });

  }


  getMonsters() {
    this.dataMockService.getMonsters().subscribe(data => { this.dataList = data }); 
  }

  getCreatures(){
    this.dataMockService.getCreatures().subscribe(data => { this.dataList = data }); 
  }

  /**
  getAll():void{
    this.dataMockService.getAll().subscribe(data => { this.dataList = data }, 
      error => console.log('error load all data'),
      () => console.log('end load all data')); 
  }  
   */


}
