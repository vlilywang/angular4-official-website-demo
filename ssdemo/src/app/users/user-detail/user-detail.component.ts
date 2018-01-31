import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../../bean/user';
import { UserService } from '../../service/user.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['../../css/user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id'))) 
    .subscribe(user => this.user = user);
  }

  save(): void {
    this.userService.update(this.user)
    .then(() => this.goBack());
  }
  
  goBack(): void {
    this.location.back();
  }
}

