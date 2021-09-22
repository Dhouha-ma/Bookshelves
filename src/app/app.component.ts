import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyAX6eXSOtM4fHBDqHMSZscW2aGDSY19i18",
      authDomain: "bookshelves-c8575.firebaseapp.com",
      projectId: "bookshelves-c8575",
      storageBucket: "bookshelves-c8575.appspot.com",
      messagingSenderId: "1092347072963",
      appId: "1:1092347072963:web:a45ac6681f12745f33ed76",
      measurementId: "G-RPGJL0MJZG"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
