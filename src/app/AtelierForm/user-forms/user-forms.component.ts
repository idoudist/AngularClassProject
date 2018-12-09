import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/User';
import { RouterModule , Routes} from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.css'],
  providers: [UserService]
})
export class UserFormsComponent implements OnInit {

  user: User;
  listUser: User[];
  userName: string;

  constructor(private userservice: UserService) {
    this.userName = userservice.getUserName();
  }

  ngOnInit() {
    this.user = new User;
    this.listUser = [];
  }

  addUser() {
    this.listUser.push(this.user);
  }

}
