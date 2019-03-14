import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../authentication.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService, UserServiceService]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  userName: string;

  constructor(private authenticationService: AuthenticationService, private router: Router, private userService: UserServiceService) { }

  ngOnInit() {
  }
  beginLogin(userName: string, password: string) {
    //checks to see if the username exists, if it doesnt then a message appears showing the user this. if it does then it inserts the password into the hashing function and sees if this matches the hash code that is originall associated with the username already saved
    this.authenticationService.login(userName, password);
    this.authenticationService.user.subscribe(value => {
      if (value !== null) {
        console.log(value);
        this.userName = userName;
        this.userService.loginUser(value.uid, userName);
      }
    })
  }

}
