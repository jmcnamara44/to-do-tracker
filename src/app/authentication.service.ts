import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { User } from './models/user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;

  users: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase, private firebaseAuth: AngularFireAuth)
  {
    this.user = firebaseAuth.authState;
    this.users = database.list('users');
  }

  getUserByUserName(userName: string) {
    return this.database.object('users/' + userName);
  }

  login(userName: string, password: string) {
      //checks to see if the username exists, if it doesnt then a message appears showing the user this. if it does then it inserts the password into the hashing function and sees if this matches the hash code that is originall associated with the username already saved
      //what is the most efficient way to search for and see if a user exists in our database?
      // this.user = database.object()
      this.firebaseAuth.auth.signInWithEmailAndPassword(userName, password).then(value => {
        return true;
      }).catch(err => {
        return false;
      });
      // let passwordHash = this.passwordHashFunction(password);
      // this.getUserByUserName(userName).subscribe(dataLastEmittedFromObserver => {
      //   this.user = dataLastEmittedFromObserver;
      //   console.log(this.user);
      //   if (passwordHash != this.user.passwordHash) {
      //     this.user = null;
      //     console.log("nahhhhh");
      //   }
      //   this.userLoggedIn = true;
      //   console.log(this.user);
      // });
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }
  createUser(usersName: string, password: string) {
    //the code to create a username and password. we will add a new user to the database, possibly using a hash table in order to make looking up a user that much easier when we totally have like a billion users.
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(usersName, password)
      .then(value => {
        this.user.subscribe(data => {
        })
        return true;
      })
      .catch(err => {
        return false;
    });
    // let passwordHash = this.passwordHashFunction(password);
    // let activities = [];
    // let newUser: User = new User(usersName, 4);
    // this.database.object('/users/' + usersName).set({
    //   userName: usersName,
    //   passwordHash: passwordHash,
    //   // activities: []
    // })
  }

  userNameHashFunction(userName: string) {
    //username hash function to make retrieving a users info easier from our MASSIVELY populated database
  }

  passwordHashFunction(password: string) {
    //come up with a real good hash function to turn the users password into an index
    return (password.length % 97);
  }
}
