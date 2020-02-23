import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApprovalPageRoutingModule } from './approval-routing.module';
import { ApprovalPage } from './approval.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovalPageRoutingModule,
    SharedModule
  ],
  declarations: [ApprovalPage]
})
export class ApprovalPageModule { }
