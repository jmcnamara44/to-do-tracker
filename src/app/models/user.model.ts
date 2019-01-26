import { Activity } from './activity.model';

export class User {
  constructor(public userName: string, public activities: Activity[] = []) { }
}
