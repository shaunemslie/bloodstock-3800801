import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, from, of, tap } from 'rxjs';
import {
  GoogleAuthProvider,
  User as fireUser,
  UserCredential,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  signup(body: {
    username: string;
    email: string;
    password: string;
  }): Observable<any> {
    return from(
      this.afAuth.createUserWithEmailAndPassword(body.email, body.password)
    );
  }

  login(body: { username: string; password: string }): Observable<any> {
    return from(
      this.afAuth.signInWithEmailAndPassword(body.username, body.password)
    );
  }

  googleAuth(): Observable<any> {
    return this.providerLogin(new GoogleAuthProvider());
  }

  private providerLogin(provider: any): Observable<any> {
    return from(this.afAuth.signInWithPopup(provider)).pipe(
      tap({
        next: (credentials) => {
          return credentials;
        },
        error: (err) => {
          console.error(err);
        },
      })
    );
  }
}
