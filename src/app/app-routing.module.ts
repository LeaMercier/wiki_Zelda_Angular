import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component'
import { CreatureComponent } from './creature/creature.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'monsters', component: ListComponent},
  {path: 'creatures', component: ListComponent},
  {path: 'creatures/:id', component: CreatureComponent},
  {path: '', redirectTo:'home', pathMatch:"full"},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
