import { Component, OnInit, Input } from '@angular/core';
import { ActivityService } from './../activity.service';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.css'],
  providers: [ActivityService]
})
export class EditActivityComponent implements OnInit {
  @Input() selectedActivity;

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
  }

  beginUpdatingActivity(time: number, selectedActivity) {
    console.log(selectedActivity);
    selectedActivity.hoursPracticed += time;
    console.log(selectedActivity)
    this.activityService.addTime(selectedActivity);
  }

}
