import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import { Applicant } from '../models/Applicant';
import { map } from 'rxjs/operators';
import { ApplicationSubmitted } from '../models/ApplicationSubmitted';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  applicantsCollection: AngularFirestoreCollection<Applicant>;
  ApplicantDocument: AngularFirestoreDocument<Applicant>;
  applicants: Observable<Applicant[]>;
  Applicant: Observable<Applicant>;

  appSubmittedCollection: AngularFirestoreCollection<ApplicationSubmitted>;
  AppSubmittedDocument: AngularFirestoreDocument<ApplicationSubmitted>;
  AppSubmitted: Observable<ApplicationSubmitted>;

  clientId: string;

  constructor(
    private afs: AngularFirestore
  ) {
    if (localStorage.getItem('clientId') != null) {
      this.clientId = localStorage.getItem('clientId');
      this.applicantsCollection = this.afs.collection('Applicants', ref => ref.where('clientId', '==', this.clientId));
    }
  }

  getApplicants(): Observable<Applicant[]> {
    this.applicants = this.applicantsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const ApplicantData = action.payload.doc.data() as Applicant;
        ApplicantData.applicantId = action.payload.doc.id;
        return ApplicantData;
      });
    }));
    return this.applicants; 
  }

  getApplicant(id: string): Observable<Applicant> {
    this.ApplicantDocument = this.afs.doc<Applicant>(`Applicants/${id}`);
    this.Applicant = this.ApplicantDocument.valueChanges().pipe(map(data => {
      if (data) {
        return data as Applicant;
      } else {
        return null;
      }
    }));
    return this.Applicant;
  }

  /** 
  getApplicantByUserId(id: string): Observable<Applicant> {
    this.ApplicantDocument= this.afs.doc('Applicants', ref => ref.where('userId', '==', id));
  }
  */

  //need the User Id to do this
  getApplicationForm(id: string): Observable<ApplicationSubmitted> {
    this.AppSubmittedDocument = this.afs.doc<ApplicationSubmitted>(`ApplicationForm/${id}`);
    this.AppSubmitted= this.AppSubmittedDocument.valueChanges().pipe(map(data => {
      if (data) {
        return data as ApplicationSubmitted;
      } else {
        return null;
      }
    }));
    return this.AppSubmitted;
  }

  addApplicant(newApplicant: Applicant) {
    return new Promise((resolve, reject) => {
      this.applicantsCollection.add(newApplicant)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

}