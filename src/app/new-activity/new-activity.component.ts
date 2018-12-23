import { Component, OnInit } from '@angular/core';
import { ActivityService } from './../activity.service';
import { Activity } from './../models/activity.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css'],
  providers: [ActivityService]
})
export class NewActivityComponent implements OnInit {
  activities: FirebaseListObservable<any[]>;
  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activities = this.activityService.getActivities();
  }

  beginAddNewActivity(name: string, hours: string) {
    event.preventDefault();
    var id = this.activities.length + 1;
    var hoursToNumber = parseInt(hours);
    var newActivity: Activity = new Activity(name, hoursToNumber, id);
    this.activityService.addToActivities(newActivity);
  }
}
