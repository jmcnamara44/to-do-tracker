import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Injectable()
export class UserServiceService {

  users: FirebaseListObservable<any>
  currentUser: FirebaseObjectObservable<any>;

  constructor(private database: AngularFireDatabase, private router: Router) {
    this.users = this.database.list('users');
  }

  loginUser(userId: string, userName: string) {
    let userExists = false;
    this.users.subscribe(data => {
      data.forEach(user => {
        if (user.uid === userId) {
          userExists = true;
          this.currentUser = this.database.object('users' + user.$key);
          this.router.navigate(['user', 'display', user.$key]);
        }
      });
      if (!userExists) {
        let name = (userName) ? userName : 'guest';
        let newUser = {
          uid: userId,
          userName: name,
          activities: []
        }
        this.users.push(newUser)
        .then(value => {
          this.currentUser = this.database.object('users/' + value.key);
          this.router.navigate(['user', 'display', value.key]);
        });
      }
    });
  }


}
