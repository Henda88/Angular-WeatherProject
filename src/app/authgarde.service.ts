import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthgardeService {

  constructor(public fauth: AngularFireAuth, private router: Router) { }
  login() {
    this.fauth.auth.signInWithPopup(new auth.GoogleAuthProvider() ).then(() => {
    this.router.navigateByUrl('/dashbord');
    });
   }
   logout() {
     this.fauth.auth.signOut().then(() => {
       this.router.navigateByUrl('/login');
     });
   }
   loginsimple(email , password) {
    this.fauth.auth.signInWithEmailAndPassword(email, password).then(user => {
      this.router.navigateByUrl('/dashbord');
    });
  }
}
