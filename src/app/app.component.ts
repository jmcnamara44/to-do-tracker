import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})

export class AppComponent {

  constructor(private authenticationService: AuthenticationService) { }

  beginLogout() {
    this.authenticationService.logout();
  }
}
