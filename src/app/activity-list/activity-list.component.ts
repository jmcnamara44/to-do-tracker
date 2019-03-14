import { Component, OnInit } from '@angular/core';
import { Activity } from './../models/activity.model';
import { ActivityService } from './../activity.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css'],
  providers: [ActivityService, UserServiceService]
})
export class ActivityListComponent implements OnInit {

  constructor(private router: Router, private activityService: ActivityService, private userService: UserServiceService) { }

  activities: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.activities = this.activityService.getActivities();
  }

  goToDetailPage(clickedActivity) {
    this.router.navigate(['details', clickedActivity.$key]);
  }

}
