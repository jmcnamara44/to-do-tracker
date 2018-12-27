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
    var goalCompletionDateAsString: string = goalCompletionDateAsDate.toDateString();
    var todaysDate: Date = new Date();
    var todaysDateToString: string = todaysDate.toDateString();
    var initialHours = {};
    initialHours[todaysDateToString] = 0;
    var newActivity: Activity = new Activity(name, initialHours, hoursGoalToNumber, 0, goalCompletionDateAsString, notes, todaysDateToString);
    console.log(newActivity);
    console.log(initialHours["Wed Dec 26 2018"])
    this.activityService.addToActivities(newActivity);
  }
}
