import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserCenterRoutingModule } from './user-center-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    UserCenterRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  declarations: [
    UserListComponent,
    UserDetailComponent
  ]
})
export class UserCenterModule { }
