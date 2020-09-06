import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './work/work.component';


const routes: Routes = [
  {
    path: 'work',
    component: WorkComponent
  },
  // {
  //   path: 'item/:id',
  //   component: CharacterEditComponent
  // },
  {
    path: '', redirectTo: 'work', pathMatch: 'full',
  }, {
    path: '**', redirectTo: 'work'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
