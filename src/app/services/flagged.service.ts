import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';
import { map } from 'rxjs/operators';
import { Applicant } from '../models/Applicant';
import { containsElement } from '../../../node_modules/@angular/animations/browser/src/render/shared';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FlaggedService {
    public flaggedApplicants: Applicant[]=[];

    
    push(applicant: Applicant) {

        if (this.flaggedApplicants.indexOf(applicant) > -1) {
            
        }
        else {
            this.flaggedApplicants.push(applicant);

            console.log(this.flaggedApplicants);      
          }

    }

    remove(applicant: Applicant) {

        if (this.flaggedApplicants.indexOf(applicant) > -1) {

            let index = this.flaggedApplicants.indexOf(applicant);

            this.flaggedApplicants.splice(index, 1);
        }

    }

    getAll(){

        return this.flaggedApplicants;

    }

        clear(){
            while (this.flaggedApplicants.length > 0) {
                this.flaggedApplicants.pop();
            }
        }

        constructor() { }
    }
