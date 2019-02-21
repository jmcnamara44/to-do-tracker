import { Activity } from './activity.model';

export class User {
  constructor(public userName: string, public passwordHash: number, public activities: Activity[] = []) { }
}
// firebase will not have all the details of the activity, just the acitivity id?
// maybe we should have the hierarchy in the db look like this:
  // userId
    // userName
    // password
    // activities - this will be an array of the activities, or maybe just the acitivty ids?
      // activityname
      // hoursPracticed
      // totalHoursPracticed
      // hoursToComplete
      // goalCompletionDate
      // notes
      // dateCreated
