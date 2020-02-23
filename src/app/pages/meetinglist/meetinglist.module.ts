import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeetinglistPageRoutingModule } from './meetinglist-routing.module';

import { MeetinglistPage } from './meetinglist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeetinglistPageRoutingModule
  ],
  declarations: [MeetinglistPage]
})
export class MeetinglistPageModule {}
