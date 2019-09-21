import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WordUnknowComponent} from './word-unknow/word-unknow.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'' , redirectTo:'home',pathMatch:'full'},
  {path:'home',component:WordUnknowComponent}
  //, {path:'conversation'},
  // {path:'about'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
