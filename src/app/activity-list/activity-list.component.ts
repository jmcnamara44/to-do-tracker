import { Component, OnInit } from '@angular/core';
import { Activity } from './../models/activity.model';
import { ActivityService } from './../activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css'],
  providers: [ActivityService]
})
export class ActivityListComponent implements OnInit {

  constructor(private activityService: ActivityService) { }
  activities: Activity[];
  ngOnInit() {
    this.activities = this.activityService.activities;
    console.log(this.activities);
  }

}
