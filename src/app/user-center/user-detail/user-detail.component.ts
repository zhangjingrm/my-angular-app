import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  projectName: string;
  companyName: string;
  status: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getDetailById();
  }

  getDetailById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getDetailById(id).subscribe(res => {
      this.companyName = res.companyName;
      this.projectName = res.projectName;
      this.status = res.status;
    })
  }

  handleClick(): void {
    console.log(this);
    let obj = {
      projectName: this.projectName,
      companyName: this.companyName,
      status: this.status,
      id: +this.route.snapshot.paramMap.get('id')
    }
    this.userService.updateProject(obj).subscribe(res => {
      console.log(res, 'res');
    })
  }
}
