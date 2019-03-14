import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivityService } from './../activity.service';
import { Activity } from './../models/activity.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css'],
  providers: [ActivityService, UserServiceService]
})
export class NewActivityComponent implements OnInit {
  @Output() clickSender = new EventEmitter();
  currentRoute: string = this.router.url;
  uid: string;
  constructor(private router: Router, private route: ActivatedRoute, private userService: UserServiceService, private activityService: ActivityService) { }

  ngOnInit() {
    this.route.params.forEach(parameter => {
      this.uid = parameter['uid'];
      this.userService.setUser(this.uid);
    })
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
    var newActivity: Activity = new Activity(name, initialHours, 0, hoursGoalToNumber, goalCompletionDateAsString, notes, todaysDateToString);
    this.activityService.addToActivities(newActivity, this.uid);
  }

  cancelNewActivity() {
    this.clickSender.emit();
  }
}
