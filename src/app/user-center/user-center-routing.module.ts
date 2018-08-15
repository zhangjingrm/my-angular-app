import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCenterComponent } from './user-center.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UserCenterComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'userList', component: UserListComponent }, 
          { path: 'userDetail/:id', component: UserDetailComponent },
          { path: '', component: UserListComponent}
        ]
      }
    ]
  }
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class UserCenterRoutingModule { }