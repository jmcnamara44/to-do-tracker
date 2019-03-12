import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  userName: string;
  isLoggedIn: boolean = false;
  constructor(private authenticationService: AuthenticationService)
  {
    this.isLoggedIn = this.authenticationService.isLoggedIn();
  }
  beginLogout() {
    this.authenticationService.logout();
  }
}
