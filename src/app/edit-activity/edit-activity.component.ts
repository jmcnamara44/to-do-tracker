import { Component, OnInit, Input } from '@angular/core';
import { ActivityService } from './../activity.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.css'],
  providers: [ActivityService]
})
export class EditActivityComponent implements OnInit {
  @Input() selectedActivity;
  editGoal: boolean = false;

  constructor(private activityService: ActivityService, private router: Router) { }

  ngOnInit() {
  }

  beginUpdatingActivity(time: number, selectedActivity) {
    selectedActivity.totalHoursPracticed += time;
    var practiceDate: string = new Date().toDateString();
    if(practiceDate in selectedActivity.hoursPracticed){
      selectedActivity.hoursPracticed[practiceDate] += time;
    } else {
      selectedActivity.hoursPracticed[practiceDate] = time;
    }
    this.activityService.addTime(selectedActivity);
  }

  beginDeletingActivity(activityToDelete){
    if(confirm("Are you sure you want to delete this activity? This action cannot be undone.")){
      this.activityService.deleteActivity(activityToDelete);
      this.router.navigate(['']);
    }

  }

  beginEditingGoalDetails(activityToEdit) {
    this.editGoal = true;
  }

  cancelEditingGoal() {
    this.editGoal = false;
  }

}
