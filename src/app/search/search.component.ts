import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  checkedCreaturesNoFood : boolean = true;
  checkedCreaturesFood : boolean = false;
  checkedMonsters : boolean = true;

  
  monstersGroup: FormGroup = new FormGroup({
    controlMonsters: new FormControl(),
    controlCreaturesFood: new FormControl(),
    controlCreaturesNoFood: new FormControl(),
  });

  constructor(
    private reactiveFormsModule : ReactiveFormsModule
  ) { }

  ngOnInit(): void {
    
    this.monstersGroup.get('controlMonsters')?.valueChanges.subscribe(res => { 
      this.checkedMonsters = (Boolean)(res);
      console.log(this.checkedMonsters);
    });
    this.monstersGroup.get('controlCreaturesFood')?.valueChanges.subscribe(res => { 
      this.checkedCreaturesFood = (Boolean)(res);
      console.log(this.checkedCreaturesFood);
    });
    this.monstersGroup.get('controlCreaturesNoFood')?.valueChanges.subscribe(res => { 
      this.checkedCreaturesNoFood = (Boolean)(res);
      console.log(this.checkedCreaturesNoFood);
    });

  }

}
