import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthenticationService]
})
export class HeaderComponent {
  // maybemaybemaybe
  isLoggedIn: boolean = false;
  constructor(private authenticationService: AuthenticationService)
  {
    // this.authenticationService.user.subscribe(user => {
    //   console.log(user);
    //   if (user == null) {
    //     this.isLoggedIn = false;
    //   } else {
    //     this.isLoggedIn = true;
    //   }
    // })
  }
  // end of maybemaybemaybe
  showFormClicked = false;
  startShowForm() {
    this.showFormClicked = true;
  }

}
