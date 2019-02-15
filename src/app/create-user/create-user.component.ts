import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  createUser(userName: string, password: string, passwordConfirm: string) {
    event.preventDefault();
    //method here to check if userName exists. if it does then notify the user. if not create the user in the db
    if (password != passwordConfirm) {
      console.log("PAsswords dont match");
    }
    if (password == "buttons") {
      console.log("password matches, congrats loser. you should now be able to see your activities");
    }
  }
}
