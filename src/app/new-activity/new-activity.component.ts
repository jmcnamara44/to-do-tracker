import { Component, Input } from '@angular/core';
import { ActivityService } from './../activity.service';
import { Activity } from './../models/activity.model';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css'],
  providers: [ActivityService]
})
export class NewActivityComponent {

  constructor(private activityService: ActivityService) { }

  formSelected = null;
  beginAddNewActivity(name: string, hours: string) {
    event.preventDefault();
    var hoursToNumber = parseInt(hours);
    var newActivity: Activity = new Activity(name, hoursToNumber);
    this.activityService.addToActivities(newActivity);
  }
}
