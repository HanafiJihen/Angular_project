import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AjoutComponent } from './ajout/ajout.component';




/// hedhouma li aamlna byhom navbar ////

const routes: Routes = [ 
  
  { path: 'ajout' , component: AjoutComponent }, 
  {path: 'list' , component: ListComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
