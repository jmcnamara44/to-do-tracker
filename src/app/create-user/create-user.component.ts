import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../authentication.service';
import { UserServiceService } from './../user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [AuthenticationService, UserServiceService]
})
export class CreateUserComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private userService: UserServiceService) { }

  ngOnInit() {
  }
  createUser(userName: string, password: string, passwordConfirm: string) {
    event.preventDefault();
    if (password != passwordConfirm) {
      alert("Your passwords do not match, please try again.");
      return null;
    }
    this.authenticationService.createUser(userName, password);
    this.authenticationService.user.subscribe(value => {
      if (value !== null) {
        this.userService.loginUser(value.uid, userName);
      }
    })
  }

}
