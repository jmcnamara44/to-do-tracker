import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../authentication.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  beginLogin(userName: string, password: string) {
    //checks to see if the username exists, if it doesnt then a message appears showing the user this. if it does then it inserts the password into the hashing function and sees if this matches the hash code that is originall associated with the username already saved
    this.authenticationService.login(this.user.email, this.user.password).then((res) => {
      console.log(res);

      this.router.navigate(['/']);
    }).catch((err) => console.log('error: ' + err));
  }
}
