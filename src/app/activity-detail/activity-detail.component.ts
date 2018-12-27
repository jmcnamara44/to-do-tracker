import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Activity } from './../models/activity.model';
import { ActivityService } from './../activity.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css'],
  providers: [ActivityService]
})
export class ActivityDetailComponent implements OnInit {
  activityId: string;
  activityToDisplay;
  daysLeft: number;

  constructor(private route: ActivatedRoute, private location: Location, private activityService: ActivityService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.activityId = urlParameters['id'];
    });
    this.activityService.getActivityById(this.activityId).subscribe(dataLastEmittedFromObserver => {
      this.activityToDisplay = dataLastEmittedFromObserver;
      var date1: Date = new Date(this.activityToDisplay.goalCompletionDate);
      var date2: Date = new Date(this.activityToDisplay.dateCreated);
      this.daysLeft = date1.getTime() - date2.getTime();
      console.log();
    })
  }

}
