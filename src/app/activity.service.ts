import { Injectable } from '@angular/core';
import { ACTIVITIES } from './mock-activities';
import { Activity } from './models/activity.model';
@Injectable()
export class ActivityService {
  activities: Activity[];
  constructor()
  {
    this.activities = ACTIVITIES;
    console.log(this.activities);
  }
  addToActivities(activityToAdd: Activity) {
    this.activities.push(activityToAdd);
  }

}
