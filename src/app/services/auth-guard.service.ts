import { AuthenticationService } from './../authentication.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  canActivate() {
    if (this.authenticationService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }

}
