import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
const { auth } = firebase;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buy-sell';

  constructor(
    public auth:AngularFireAuth,
  ){ }

  signInClicked():void{
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  signOutClicked():void{
    this.auth.signOut();
  }
}
