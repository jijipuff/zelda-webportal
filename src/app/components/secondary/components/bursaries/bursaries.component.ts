import { Component, OnInit } from '@angular/core';
import { BursaryService } from '../../../../services/bursary.service';
import { Bursary } from '../../../../models/Bursary';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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

    this.Bursaries$= this.afs.collection('Bursaries').valueChanges();
   
    /** 
    this.Bursaries$ = combineLatest(
      this.titleFilter$,
      this.dateFilter$
    ).pipe(
      switchMap(([title, date]) =>
        afs.collection('Bursaries', ref => {
          let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (title) { query = query.orderBy('title', 'asc') };
          if (date) { query= query.orderBy('date', 'asc')};
          return query;
        }).valueChanges()
      )
    );
    */
   }

 


  ngOnInit() {
  }


  filterByTitle(title: string | null) {
    this.Bursaries$= this.afs.collection('Bursaries', ref=> ref.orderBy('title', 'asc')).valueChanges();
  }

  filterByDate(date: string | null) {
    this.Bursaries$= this.afs.collection('Bursaries', ref=> ref.orderBy('date', 'asc')).valueChanges();
  }

}
