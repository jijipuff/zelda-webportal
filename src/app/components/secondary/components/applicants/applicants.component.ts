import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '../../../../../../node_modules/angularfire2/firestore';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { UserProfileDemographics } from '../../../../models/UserProfileDemographics';
import { Applicant } from '../../../../models/Applicant';
import { User } from '../../../../../../node_modules/firebase';


@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {

  studentInfo: boolean;

  userDemographics$: Observable<UserProfileDemographics[]>;
  UserDemographic: Observable<UserProfileDemographics>;

  genderFilter$: BehaviorSubject<string | null>
  raceFilter$: BehaviorSubject<string | null>
  nationalityFilter$: BehaviorSubject<string | null>


  gender: string= '';
  race: string='';
  nationality: string='';

  filterOn: boolean;

  applicantId: string;

  constructor(afs: AngularFirestore) {
    this.genderFilter$ = new BehaviorSubject(null);
    this.raceFilter$ = new BehaviorSubject(null);
    this.nationalityFilter$ = new BehaviorSubject(null);

    this.userDemographics$ = combineLatest(
      this.genderFilter$,
      this.raceFilter$,
      this.nationalityFilter$
    ).pipe(
      switchMap(([gender, race, nationality]) =>
        afs.collection('UserProfileDemographics', ref => {
          let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (gender) { query = query.where('gender', '==', gender) };
          if (race) { query = query.where('race', '==', race) };
          if (nationality) { query= query.where('nationality', '==',nationality)};
          return query;
        }).snapshotChanges().pipe(map(changes=> {
          return changes.map(action=> {
            const userData= action.payload.doc.data() as UserProfileDemographics;
            this.applicantId= userData.applicantId;
            return userData;
          });
        })))
      );
  }

  ngOnInit() {
    this.filterOn= false;
  }

  filterByGender(gender: string | null) {
    this.genderFilter$.next(gender);
    this.gender= gender;
  }
  filterByRace(race: string | null) {
    this.raceFilter$.next(race);
    this.race= race;
  }
  filterByNationality(nationality: string | null) {
    this.nationalityFilter$.next(nationality);
    this.nationality= nationality;
  }

  filter() {
    this.filterOn= !this.filterOn;
  }

}
