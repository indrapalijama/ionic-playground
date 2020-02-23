import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MenuPage,
    children: [
      { path: 'home', loadChildren: '../dashboard/dashboard.module#DashboardPageModule' },
      { path: 'request', loadChildren: '../request/request.module#RequestPageModule' },
      { path: 'approval', loadChildren: '../approval/approval.module#ApprovalPageModule' }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard/dashboard/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
