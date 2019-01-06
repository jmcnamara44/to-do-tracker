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
  totalDays: number;
  objectKeys: number;
  goalDaysRange: number;
  todaysHours: number;
  
  constructor(private route: ActivatedRoute, private location: Location, private activityService: ActivityService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.activityId = urlParameters['id'];
    });
    this.activityService.getActivityById(this.activityId).subscribe(dataLastEmittedFromObserver => {
      this.activityToDisplay = dataLastEmittedFromObserver;
      var date1: Date = new Date();
      var date2: Date = new Date(this.activityToDisplay.dateCreated);
      var date3: Date = new Date(this.activityToDisplay.goalCompletionDate);
      this.totalDays = Math.round((date1.getTime() - date2.getTime()) / 1000 / 60 / 60 / 24);
      this.goalDaysRange = Math.round((date3.getTime() - date2.getTime()) / 1000 / 60 / 60 / 24);
      this.objectKeys = Object.keys(this.activityToDisplay.hoursPracticed).length;
      this.todaysHours = this.activityToDisplay.hoursPracticed[(new Date().toDateString())];
    })
  }

}
