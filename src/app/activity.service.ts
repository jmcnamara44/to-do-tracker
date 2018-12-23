import { Injectable } from '@angular/core';
import { ACTIVITIES } from './mock-activities';
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
  getActivityById(id: number) {
    var indexPosition = id-1;
    return this.activities[indexPosition];
  }
}
