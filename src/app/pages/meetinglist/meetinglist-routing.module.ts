import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetinglistPage } from './meetinglist.page';

const routes: Routes = [
  {
    path: '',
    component: MeetinglistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeetinglistPageRoutingModule {}
