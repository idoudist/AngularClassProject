import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers: [UserService]
})
export class UserFormComponent implements OnInit {
  userName: string;
  user = new User();
  listUsers: User[];

  constructor(private userservice: UserService) {
    this.userName = userservice.getUserName();
  }

  ngOnInit() {
    this.listUsers = [];

  }

  addUser() {
    this.listUsers.push(this.user);
  }

}
