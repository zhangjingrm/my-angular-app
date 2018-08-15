import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { UserListComponent } from './user-center/user-list/user-list.component';
import { UserDetailComponent } from './user-center/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/userCenter', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { 
    path: 'userCenter',
    children: [
      { path: 'userList', component: UserListComponent }, 
      { path: 'userDetail/:id', component: UserDetailComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
