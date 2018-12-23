import { Component, OnInit } from '@angular/core';
import { Activity } from './../models/activity.model';
import { ActivityService } from './../activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css'],
  providers: [ActivityService]
})
export class ActivityListComponent implements OnInit {

  constructor(private router: Router, private activityService: ActivityService) { }
  activities: Activity[];
  ngOnInit() {
    this.activities = this.activityService.activities;
    console.log(this.activities);
  }
  goToDetailPage(clickedActivity) {
    this.router.navigate(['details', clickedActivity.id]);
  }
}
