import { Component, OnInit } from '@angular/core';
import { ActivityService } from './../activity.service';
import { Activity } from './../models/activity.model';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css'],
  providers: [ActivityService]
})
export class NewActivityComponent implements OnInit {
  constructor(private activityService: ActivityService) { }

  ngOnInit() {
  }

  beginAddNewActivity(name: string, hours: string, goals: string) {
    event.preventDefault();
    var hoursToNumber = parseInt(hours);
    var newActivity: Activity = new Activity(name, hoursToNumber, goals);
    this.activityService.addToActivities(newActivity);
  }
}
