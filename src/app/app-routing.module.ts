import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginGuardService } from './services/login-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule',
    canActivate: [LoginGuardService]
  },
  {
    path: 'dashboard',
    loadChildren: './pages/menu/menu.module#MenuPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'meetinglist/:id',
    loadChildren: './pages/meetinglist/meetinglist.module#MeetinglistPageModule',
  },
  {
    path: 'account',
    loadChildren: './pages/account/account.module#AccountPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
