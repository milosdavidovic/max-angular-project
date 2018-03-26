import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
   firebase.initializeApp({
    apiKey: "AIzaSyBH9iufWyZ1qXivgV_Ba6S0-x6EDRNXjHI",
    authDomain: "ng-recipe-book-bf184.firebaseapp.com"
   })
  }
}
