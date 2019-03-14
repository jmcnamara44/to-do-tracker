import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { UserServiceService } from './user-service.service';
import { ActivityService } from './activity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService, UserServiceService, ActivityService]
})

export class AppComponent implements OnInit {
  userName: string;
  isLoggedIn: boolean = false;
  constructor(private activityService: ActivityService, private router: Router, private userService: UserServiceService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.user.subscribe(value => {
      if (value !== null) {
        this.isLoggedIn = true;
      }
    })
  }

  beginLogout() {
    this.authenticationService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['']);
  }

  goToUserHome() {
    this.authenticationService.user.subscribe(value => {
      if (value !== null) {
        this.userName = value.email;
        this.userService.loginUser(value.uid, value.email);
      }
    })
  }
  beginAddFeedback(feedback) {
    this.activityService.addFeedback(feedback);
  }
}
