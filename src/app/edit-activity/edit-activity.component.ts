import { Component, OnInit, Input } from '@angular/core';
import { ActivityService } from './../activity.service';
import { UserServiceService } from './../user-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.css'],
  providers: [ActivityService, UserServiceService]
})
export class EditActivityComponent implements OnInit {
  @Input() selectedActivity;
  editGoal: boolean = false;
  editDay: boolean = false;
  practiceDate = new Date(1970, 0, 0);
  d;
  uid: string;

  constructor(private activityService: ActivityService, private router: Router, private route: ActivatedRoute, private userService: UserServiceService) { }

  ngOnInit() {
    this.route.params.forEach(parameter => {
      this.uid = parameter['uid'];
      this.userService.setUser(this.uid);
    })
  }

  beginUpdatingActivity(time, selectedActivity) {
    if (isNaN(parseInt(time))) {
      time = "0";
    }
    var timeNumber = parseInt(time);
    selectedActivity.totalHoursPracticed += timeNumber;
    var practiceDate: string = new Date().toDateString();
    if (practiceDate in selectedActivity.hoursPracticed) {
      selectedActivity.hoursPracticed[practiceDate] += timeNumber;
    } else {
      selectedActivity.hoursPracticed[practiceDate] = timeNumber;
    }
    this.activityService.addTime(selectedActivity, this.uid);
  }

  beginDeletingActivity(activityToDelete){
    if (confirm("Are you sure you want to delete this activity? This action cannot be undone.")) {
      let activityName = prompt("Type in the name of the activity you'd like to delete to delete it.");
      if (activityName == activityToDelete.name) {
        this.activityService.deleteActivity(activityToDelete, this.uid);
        this.router.navigate(['']);
      }
    }
  }

  beginEditingGoalDetails(activityToEdit) {
    this.editGoal = true;
  }

  beginUpdatingASpecificDay() {
    this.editDay = true;
  }

  cancelEditingGoal() {
    this.editGoal = false;
  }

  parsePracticeDate(practiceDate) {
    var parts = practiceDate.split('-');
    this.d = (new Date(parts[0], parts[1]-1, parts[2]).toDateString());
  }

  changeDayshours(practiceDate, newHours, activity) {
    if (isNaN(parseInt(newHours))) {
      newHours = "0";
    }
    let parts = practiceDate.split('-');
    let dateParse = (new Date(parts[0], parts[1]-1, parts[2]).toDateString());
    let minutesParse = parseInt(newHours);

    if (dateParse in activity.hoursPracticed) {
      activity.totalHoursPracticed -= activity.hoursPracticed[dateParse];
    }

    activity.totalHoursPracticed += minutesParse;
    activity.hoursPracticed[dateParse] = minutesParse;

    this.activityService.addTime(activity, this.uid);
  }

}
