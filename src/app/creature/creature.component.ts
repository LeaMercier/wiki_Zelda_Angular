import { Component, Input, OnInit } from '@angular/core';
import { IData } from 'src/app/IData';
import { DataMockService } from '../data-mock.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-creature',
  templateUrl: './creature.component.html',
  styleUrls: ['./creature.component.css']
})
export class CreatureComponent implements OnInit {

  @Input() 
  myCreature !: IData;

  constructor(
    private dataMockService : DataMockService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params: ParamMap) => { 
      console.log(Number(params.get('id')));
      let id = params.get('id');
      this.getCreatureById(Number(id));
    });
  }

  getCreatureById(id : number){
    this.dataMockService.getCreature(id)?.subscribe(data=>{this.myCreature=data});
  }
}
