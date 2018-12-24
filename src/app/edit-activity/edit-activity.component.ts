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
    console.log(this.selectedActivity);
  }

  beginUpdatingActivity(time: number, selectedActivit) {
    console.log(selectedActivit);
    selectedActivit.hoursPracticed += time;
    console.log(selectedActivit)
    this.activityService.addTime(selectedActivit);
  }

}