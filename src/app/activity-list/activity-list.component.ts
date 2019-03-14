import { Component, OnInit } from '@angular/core';
import { Activity } from './../models/activity.model';
import { ActivityService } from './../activity.service';
import { UserServiceService } from './../user-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css'],
  providers: [ActivityService, UserServiceService]
})
export class ActivityListComponent implements OnInit {
  uid: string;
  constructor(private router: Router, private activityService: ActivityService, private userService: UserServiceService, private route: ActivatedRoute) { }

  activities: FirebaseListObservable<any[]>;

  ngOnInit() {
    // this.activities = this.activityService.getActivities();
    this.route.params.forEach(parameter => {
      this.uid = parameter['uid'];
      this.userService.setUser(this.uid);
    })
  }

  goToDetailPage(clickedActivity) {
    this.router.navigate(['details', this.uid, clickedActivity.$key]);
  }

}
