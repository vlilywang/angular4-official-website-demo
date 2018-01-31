import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../bean/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['../../css/users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(
    private userService: UserService,
    private router: Router
  ){}


  getUsers():void {
    this.userService.getUsers().then(users => this.users = users);
  }
  
  add(username: string): void {
    username = username.trim();
    if (!username) {
      return;
    }
    this.userService.create(username).then(user => {
      this.users.push(user);
      this.selectedUser = null;
    });
  }
  delete(user: User): void {
    this.userService
    .delete(user.id)
    .then(() => {
      this.users = this.users.filter(h => h !== user);
      if (this.selectedUser === user) {
        this.selectedUser = null;
      }
    });
  }
  ngOnInit():void {
    this.getUsers();
  }
  onSelect(user:User): void{
    this.selectedUser = user;
  }
  gotoDetail(): void{
    this.router.navigate(['users/detail/', this.selectedUser.id]);
  }

}

