import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  dataSet = [];

  confirmModal: NzModalRef;

  id: number;
  name: string;
  power: string;
  alterEgo?: string;
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  constructor(
    private userService: UserService,
    private modal: NzModalService
  ) {
    
  }

  ngOnInit() {

    this.userService.getProject().subscribe(res => {
      this.dataSet = res
    }, error => {
      console.log(error, 888)
    });
  }

  handleClick() {
    console.log(this.name, this.power, this.alterEgo)
  }

  delete (id):void {
    this.confirmModal = this.modal.confirm({
      nzTitle: '提示',
      nzContent: '确认删除吗？',
      nzOnOk: () => {
        this.userService.deleteProject({id: id}).subscribe(res => {
          console.log(res, 'res');
        }, error => {

        })
      }
    })
  }

}
