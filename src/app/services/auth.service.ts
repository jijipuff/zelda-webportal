import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ClientAdmin } from '../models/ClientAdmin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  clientAdminDocument: AngularFirestoreDocument<ClientAdmin>;
  clientAdmin: Observable<ClientAdmin>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    // Get auth data, then get Firestore clientAdmin document // null
    // this.clientAdmin = this.afAuth.authState.pipe(
    //   switchMap(user => {
    //     if (user) {
    //       // retun observable of client admin data in the database
    //       return this.afs.doc<ClientAdmin>(`ClientsAdmins/${user.uid}`).valueChanges();
    //     } else {
    //       // return observable of null if the user object is not yet in the database
    //       return of(user);
    //     }
    //   })
    // );
   }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((userData) => {
        resolve(userData);
      })
      .catch((err) => {
        reject(err);
      });
    });
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((userData) => {
        resolve(userData);
      })
      .catch((err) => {
        reject(err);
      });
    });
  }

  getAuth() {
    return this.afAuth.authState.pipe(map((auth) => auth));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  addClientIdOnRegistration(userData, clientId) {
    this.clientAdminDocument = this.afs.doc(`ClientsAdmins/${userData.user.uid}`);
    const data: ClientAdmin = {
      clientAdminId: userData.user.uid,
      email: userData.user.email,
      clientId: clientId
    };
    return this.clientAdminDocument.set(data);
  }
}
