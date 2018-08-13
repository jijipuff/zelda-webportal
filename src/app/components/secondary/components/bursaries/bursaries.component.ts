import { BursaryService } from '../../../../services/bursary.service';
import { Component, OnInit } from '@angular/core';
import { Bursary } from '../../../../models/Bursary';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-bursaries',
  templateUrl: './bursaries.component.html',
  styleUrls: ['./bursaries.component.css']
})
export class BursariesComponent implements OnInit {

  bursaryinfo: boolean;

  Bursary: Observable<Bursary>;
  Bursaries$: Observable<Bursary[]>;

  bursaryId: string;

  title: string= '';
  date: string= '';

  bursaryCollection: AngularFirestoreCollection<Bursary>;
  bursaryDoc: AngularFirestoreDocument<Bursary>;


  constructor(private bursaryService: BursaryService, private afs: AngularFirestore) {

    this.bursaryinfo= false;

    this.Bursaries$= this.afs.collection('Bursaries').snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const bursaryData = action.payload.doc.data() as Bursary;
        bursaryData.bursaryId = action.payload.doc.id;
        return bursaryData;
      });
    }));
   }


  ngOnInit() {
  }


  filterByTitle(title: string | null) {
    this.Bursaries$= this.afs.collection('Bursaries', ref=> ref.orderBy('title', 'asc')).snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const bursaryData = action.payload.doc.data() as Bursary;
        bursaryData.bursaryId = action.payload.doc.id;
        return bursaryData;
      });
    }));
  }

  filterByDate(date: string | null) {
    this.Bursaries$= this.afs.collection('Bursaries', ref=> ref.orderBy('date', 'asc')).snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const bursaryData = action.payload.doc.data() as Bursary;
        bursaryData.bursaryId = action.payload.doc.id;
        return bursaryData;
      });
    }));
  }

}
