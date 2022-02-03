import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  checkedCreaturesNoFood : boolean = true;
  checkedCreaturesFood : boolean = false;
  checkedMonsters : boolean = true;

  searchGroup = new FormGroup({
    controlEffect:  new FormControl(),
    monstersGroup: new FormGroup({
      controlMonsters: new FormControl(),
      controlCreaturesFood: new FormControl(),
      controlCreaturesNoFood: new FormControl(),
    })
  })

  listEffects: string[] = ["defense up", "speed up", 'attack up']
  filteredEffects !: String[];


  constructor() { }

  ngOnInit(): void {
    this.searchGroup.get('monstersGroup.controlMonsters')?.valueChanges.subscribe(res => { 
      this.checkedMonsters = (Boolean)(res);
      console.log(this.checkedMonsters);
    });
    this.searchGroup.get('monstersGroup.controlCreaturesFood')?.valueChanges.subscribe(res => { 
      this.checkedCreaturesFood = (Boolean)(res);
      console.log(this.checkedCreaturesFood);
    });
    this.searchGroup.get('monstersGroup.controlCreaturesNoFood')?.valueChanges.subscribe(res => { 
      this.checkedCreaturesNoFood = (Boolean)(res);
      console.log(this.checkedCreaturesNoFood);
    });
    this.searchGroup.get('controlEffect')?.valueChanges.subscribe(res => { 
      this.filteredEffects = res;
      console.log(this.filteredEffects);
    });
  }

  displayEffect(){}
}
