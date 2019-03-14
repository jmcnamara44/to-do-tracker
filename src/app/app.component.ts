import { Component } from '@angular/core';
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

export class AppComponent {
  userName: string;
  constructor(private activityService: ActivityService, private router: Router, private userService: UserServiceService, private authenticationService: AuthenticationService) { }

  beginLogout() {
    this.authenticationService.logout();
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
