import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Bursary } from '../models/Bursary';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BursaryService {
  bursariesCollection: AngularFirestoreCollection<Bursary>;
  bursaryDocument: AngularFirestoreDocument<Bursary>;
  bursaries: Observable<Bursary[]>;
  bursary: Observable<Bursary>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.bursariesCollection = this.afs.collection('Bursaries', ref => ref.orderBy('title', 'asc'));
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
    newBursary.clientId = '12345';
    this.bursariesCollection.add(newBursary);
  }

}

