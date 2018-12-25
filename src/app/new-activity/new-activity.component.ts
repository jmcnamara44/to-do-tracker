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

  beginAddNewActivity(name: string, hoursGoal: string, goalCompletionDate: string, notes: string) {
    event.preventDefault();
    var hoursGoalToNumber = parseInt(hoursGoal) * 60;
    var goalCompletionDateAsDate: Date = new Date(goalCompletionDate);
    var goalCompletionDateAsString: string = goalCompletionDateAsDate.toString();
    var todaysDate: Date = new Date();
    var todaysDateToString: string = todaysDate.toString();
    var newActivity: Activity = new Activity(name, 0, hoursGoalToNumber, goalCompletionDateAsString, notes, todaysDateToString);
    this.activityService.addToActivities(newActivity);
  }
}
