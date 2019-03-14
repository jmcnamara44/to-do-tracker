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
    //method here to check if userName exists. if it does then notify the user. if not create the user in the db
    if (password != passwordConfirm) {
      console.log("PAsswords dont match");
      return null;
    }
    if (password == passwordConfirm) {
      console.log("password matches, congrats loser. you should now be able to see your activities");
    }
    this.authenticationService.createUser(userName, password);
    this.authenticationService.user.subscribe(value => {
      if (value !==null) {
        this.userService.loginUser(value.uid, userName);
      }
    })
  }

}
