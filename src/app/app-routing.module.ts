import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { InfoComponent } from './info/info.component';
import { VideoComponent } from './video/video.component';


const routes: Routes = [
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'video/:id',
    component: VideoComponent
  },
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
