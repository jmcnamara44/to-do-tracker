import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { User } from './models/user.model';
import { Router } from '@angular/router'
import { Activity } from './models/activity.model';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  // userLoggedIn: boolean = false;
  users: FirebaseListObservable<any[]>;
  constructor(private firebaseAuth: AngularFireAuth, private router: Router, private database: AngularFireDatabase)
  {
    this.users = database.list('users');
    this.user = firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  getUserByUserName(userName: string) {
    return this.database.object('users/' + userName);
  }


  login(userName: string, password: string) {
      //checks to see if the username exists, if it doesnt then a message appears showing the user this. if it does then it inserts the password into the hashing function and sees if this matches the hash code that is originall associated with the username already saved
      //what is the most efficient way to search for and see if a user exists in our database?
      // this.user = database.object()
      firebase.auth().signInWithEmailAndPassword(userName, password).catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
      let passwordHash = this.passwordHashFunction(password);
      const credential = firebase.auth.EmailAuthProvider.credential(userName, password);
      return this.firebaseAuth.auth.signInWithEmailAndPassword(userName, password);
      // this.getUserByUserName(userName).subscribe(dataLastEmittedFromObserver => {
      //   this.user = new User(dataLastEmittedFromObserver.userName, dataLastEmittedFromObserver.passwordHash, hobbies);
      //   console.log(this.user);
      //   // if (passwordHash != this.user.passwordHash) {
      //   //   this.user = null;
      //   //   console.log("nahhhhh");
      //   // }
      //   // this.userLoggedIn = true;
      //   // console.log(this.user);
      //   this.router.navigate(['']);
      // });
      // console.log(this.user);

  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
    // this.firebaseAuth.auth.signOut().then((res) => this.router.navigate(['/']));
  }
  createUser(usersName: string, password: string) {
    //the code to create a username and password. we will add a new user to the database, possibly using a hash table in order to make looking up a user that much easier when we totally have like a billion users.
    let passwordHash = this.passwordHashFunction(password);
    // firebase.auth().createUserWithEmailAndPassword(usersName, password).catch(function(error) {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    // });
    firebase.auth().createUserWithEmailAndPassword(usersName, password).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      console.log(error);
      var errorMessage = error.message;
      // ...
    });
    // this.database.object('/users/' + usersName).set({
    //   userName: usersName,
    //   passwordHash: passwordHash,
    //   activities: activities
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
