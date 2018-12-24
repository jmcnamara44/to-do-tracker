import { Injectable } from '@angular/core';
import { Activity } from './models/activity.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ActivityService {
  activities: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase)
  {
    this.activities = database.list('activities');
    console.log(this.activities);
  }
  addToActivities(activityToAdd: Activity) {
    this.activities.push(activityToAdd);
  }
  getActivities() {
    return this.activities;
  }
  getActivityById(activityId: string) {
    return this.database.object('activities/' + activityId);
  }
}
