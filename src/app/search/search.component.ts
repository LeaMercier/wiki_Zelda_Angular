import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataMockService } from '../data-mock.service';
import { IData } from '../IData';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  checkedCreaturesNoFood : boolean = true;
  checkedCreaturesFood : boolean = false;
  checkedMonsters : boolean = true;
  listData !: IData[];
  filteredData !: IData[];

  searchGroup = new FormGroup({
    controlEffect:  new FormControl(),
    monstersGroup: new FormGroup({
      controlMonsters: new FormControl(true),
      controlCreaturesFood: new FormControl(false),
      controlCreaturesNoFood: new FormControl(true),
    })
  })

  listEffects: string[] = ['defense up', 'speed up', 'attack up']
  filteredEffects !: String[];


  constructor(
    private dataMockService : DataMockService
  ) { }

  ngOnInit(): void {
    this.getAllElements();
    this._updateListSlide(); // On l'update au lancement puis à chaque choix de l'utilisateur
    this.searchGroup.get('monstersGroup.controlMonsters')?.valueChanges.subscribe(res => { 
      this.checkedMonsters = (Boolean)(res);
      this._updateListSlide();
    });
    this.searchGroup.get('monstersGroup.controlCreaturesFood')?.valueChanges.subscribe(res => { 
      this.checkedCreaturesFood = (Boolean)(res);
      this._updateListSlide();
    });
    this.searchGroup.get('monstersGroup.controlCreaturesNoFood')?.valueChanges.subscribe(res => { 
      this.checkedCreaturesNoFood = (Boolean)(res);
      this._updateListSlide();
    });
    this.searchGroup.get('controlEffect')?.valueChanges.subscribe(res => { 
      this.filteredEffects = res;
      this._updateListSlide();
    });
  }

  private getAllElements(){
    this.dataMockService.getAll().subscribe(data => { this.listData = data }); 
  }

  private _updateListSlide(): void{
    this.filteredData = this._filterListSlide();
    console.log(this.filteredData);
  }

  /**
   * @returns 
   */
  private _filterListSlide(): IData[]{
    let test =  this.listData.filter(option => 
      (option.category == "monster" && this.checkedMonsters)
      || (option.category == "creatureNoFood" && this.checkedCreaturesNoFood)
      || ((option.category == "creatureFood" && this.checkedCreaturesFood)&&(this.filteredEffects==undefined || this.filteredEffects.length == 0)) // Si l'utilisateur n'a pas choisit de critères d'optimisation, on renvoit toutes les créatures food
      || (( option.cooking_effect != undefined && this.filteredEffects != undefined && this.filteredEffects.indexOf(option.cooking_effect) > -1)) // Sinon on renvoit juste les créatures correspondnants aux bons critères, 
      //on vérifie si les créatures ont les critères voulu en vérifiant que leurs effets ont bien un index dans la table filteredEffects (je n'est pas trouvé moins tordu navrée)
    )
    return test
  }

}
