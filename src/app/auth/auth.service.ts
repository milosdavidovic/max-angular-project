import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable()
export class AuthService {

  public token;

  constructor() { }

  signIn(email: string, password: string) {
    return firebase.auth()
      .signInAndRetrieveDataWithEmailAndPassword(email, password);
  }

  signUp(email: string, password: string) {
    return firebase.auth()
      .createUserWithEmailAndPassword(email, password);
  }

  setToken() {
    firebase.auth().currentUser.getToken()
      .then((result) => {
        this.token = result;
      });
  }

  isAuthenticated() {
    return this.token != null;
  }

  logOut() {
    firebase.auth().signOut()
      .then(() => {
        this.token = null;
        
      });
  }
}
