import { Injectable } from '@angular/core';
import { Activity } from './models/activity.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ActivityService {
  activities: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase)
  {
    this.activities = database.list('activities');
  }
  addToActivities(activityToAdd: Activity, uid: string) {
    console.log(uid);
    this.database.list('users/' + uid + '/activities').push(activityToAdd);
  }
  getActivities() {
    return this.activities;
  }
  getActivityById(activityId: string) {
    return this.database.object('activities/' + activityId);
  }
  addTime(selectedActivity) {
    var activityEntryInFirebase = this.getActivityById(selectedActivity.$key);
    activityEntryInFirebase.update({name: selectedActivity.name,
    hoursPracticed: selectedActivity.hoursPracticed, totalHoursPracticed: selectedActivity.totalHoursPracticed, goalCompletionDate: selectedActivity.goalCompletionDate, dateCreated: selectedActivity.dateCreated, notes: selectedActivity.notes, hoursToComplete: selectedActivity.hoursToComplete});
  }
  deleteActivity(activityToDelete){
    var activityEntryInFirebase = this.getActivityById(activityToDelete.$key);
    activityEntryInFirebase.remove();
  }
}
