import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
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

  clientId: string;

  constructor(
    private afs: AngularFirestore
  ) {
    if (localStorage.getItem('clientId') != null) {
      this.clientId = localStorage.getItem('clientId');
      this.bursariesCollection = this.afs.collection('Bursaries', ref => ref.where('clientId', '==', this.clientId));
    }
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

  getBursary(id: string): Observable<Bursary> {
    this.bursaryDocument = this.afs.doc<Bursary>(`Bursaries/${id}`);
    this.bursary = this.bursaryDocument.valueChanges().pipe(map(data => {
      if (data) {
        return data as Bursary;
      } else {
        return null;
      }
    }));
    return this.bursary;
  }

  addBursary(newBursary: Bursary) {
    return new Promise((resolve, reject) => {
      this.bursariesCollection.add(newBursary)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  deleteBursary(id: string) {
    console.log(id);
    this.bursaryDocument= this.afs.doc(`Bursaries/${id}`)
    this.bursaryDocument.delete();
  }


}

