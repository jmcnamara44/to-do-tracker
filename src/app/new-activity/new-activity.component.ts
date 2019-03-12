import { Component, Output, EventEmitter } from '@angular/core';
import { ActivityService } from './../activity.service';
import { Activity } from './../models/activity.model';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css'],
  providers: [ActivityService]
})
export class NewActivityComponent {
  @Output() clickSender = new EventEmitter();
  constructor(private activityService: ActivityService) { }

  beginAddNewActivity(name: string, hoursGoal: string, goalCompletionDate: string, notes: string) {
    event.preventDefault();
    var hoursGoalToNumber = parseInt(hoursGoal) * 60;
    var goalCompletionDateAsDate: Date = new Date(goalCompletionDate);
    var goalCompletionDateAsString: string = goalCompletionDateAsDate.toDateString();
    var todaysDate: Date = new Date();
    var todaysDateToString: string = todaysDate.toDateString();
    var initialHours = {};
    initialHours[todaysDateToString] = 0;
    var newActivity: Activity = new Activity(name, initialHours, 0, hoursGoalToNumber, goalCompletionDateAsString, notes, todaysDateToString);
    this.activityService.addToActivities(newActivity);
  }

  cancelNewActivity() {
    this.clickSender.emit();
  }
}
