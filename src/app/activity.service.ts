import { Injectable } from '@angular/core';
import { Activity } from './models/activity.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ActivityService {
  activities: FirebaseListObservable<any[]>;
  feedback: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase)
  {
    this.activities = database.list('activities');
    this.feedback = database.list('feedback');
  }
  addToActivities(activityToAdd: Activity, uid: string) {
    console.log(uid);
    this.database.list('users/' + uid + '/activities').push(activityToAdd);
  }
  getActivities() {
    return this.activities;
  }
  getActivityById(activityId: string, uid: string) {
    return this.database.object('users/' + uid + '/activities/' + activityId);
  }
  addTime(selectedActivity, uid) {
    var activityEntryInFirebase = this.getActivityById(selectedActivity.$key, uid);
    activityEntryInFirebase.update({name: selectedActivity.name,
    hoursPracticed: selectedActivity.hoursPracticed, totalHoursPracticed: selectedActivity.totalHoursPracticed, goalCompletionDate: selectedActivity.goalCompletionDate, dateCreated: selectedActivity.dateCreated, notes: selectedActivity.notes, hoursToComplete: selectedActivity.hoursToComplete});
  }
  deleteActivity(activityToDelete, uid){
    var activityEntryInFirebase = this.getActivityById(activityToDelete.$key, uid);
    activityEntryInFirebase.remove();
  }
  addFeedback(feedback: string) {
    this.feedback.push(feedback);
  }
}
