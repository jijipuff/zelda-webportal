import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Bursary } from '../models/Bursary';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BursaryService {
  bursariesCollection: AngularFirestoreCollection<Bursary>;
  bursaryDocument: AngularFirestoreDocument<Bursary>;
  bursaries: Observable<Bursary[]>;
  bursary: Observable<Bursary>;

  clientId: string;

  constructor(
    private authService: AuthService,
    private afs: AngularFirestore
  ) {
    this.authService.clientAdmin.subscribe(auth => {
      this.clientId = auth.clientId;
    });
    this.bursariesCollection = this.afs.collection('Bursaries', ref => ref.where('clientId', '==', 'OtGLJR9xaw6lsJxHXa4F'));
  }

  getBursaries(): Observable<Bursary[]> {
    this.bursaries = this.bursariesCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const bursaryData = action.payload.doc.data() as Bursary;
        bursaryData.bursaryId = action.payload.doc.id;
        return bursaryData;
      });
    }));
    return this.bursaries;
  }

  addBursary(newBursary: Bursary) {
    this.bursariesCollection.add(newBursary);
  }

}

