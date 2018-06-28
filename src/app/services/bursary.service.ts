import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Bursary } from '../models/Bursary';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BursaryService {
  bursariesList: AngularFireList<Bursary[]>;
  bursaries: Observable<Bursary[]>;

  bursaryObject: AngularFireObject<Bursary>;
  bursary: Observable<Bursary>;

  constructor(
    private afDb: AngularFireDatabase
  ) {
    this.bursariesList = this.afDb.list('bursaries');
  }

  getBursaries(): Observable<Bursary[]> {
    this.bursaries = this.bursariesList.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.val() as Bursary;
        return data;
      });
    }));
    return this.bursaries;
  }

}
