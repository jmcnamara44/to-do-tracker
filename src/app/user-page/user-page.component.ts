import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './../user-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
  providers: [UserServiceService]
})
export class UserPageComponent implements OnInit {
  user: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  uid: string;

  constructor(private router: Router, private userService: UserServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach(parameter => {
      this.uid = parameter['uid'];
      this.userService.setUser(this.uid);
    })
  }

}
