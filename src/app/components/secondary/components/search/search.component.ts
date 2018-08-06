import { Component, OnInit } from '@angular/core';
import { Applicant } from '../../../../models/Applicant';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserProfileDemographics } from '../../../../models/UserProfileDemographics';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  userDemographicsCollection: AngularFirestoreCollection<UserProfileDemographics>;
  userDemographicsDocument: AngularFirestoreDocument<UserProfileDemographics>;
  userDemographics$: Observable<UserProfileDemographics[]>;
  UserDemographic: Observable<UserProfileDemographics>;

  genderFilter$: BehaviorSubject<string | null>
  raceFilter$: BehaviorSubject<string | null>
  nationalityFilter$: BehaviorSubject<string | null>

  races: boolean;
  genders: boolean;
  nationalities: boolean;

  searchResults: Array<Applicant> = [];

  showresults: boolean;


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
        }).valueChanges()
      )
    );
  }

  ngOnInit() {
   this.races= false;
   this.genders= false;
   this.nationalities= false;

  }


  filterByGender(gender: string | null) {
    this.genderFilter$.next(gender);
  }
  filterByRace(race: string | null) {
    this.raceFilter$.next(race);
  }
  filterByNationality(nationality: string | null) {
    this.nationalityFilter$.next(nationality);
  }


  showRaces() {
    this.races= !this.races;
  }
  showGenders() {
    this.genders= !this.genders;
  }
  showNationalities() {
    this.nationalities= !this.nationalities;
  }

}
