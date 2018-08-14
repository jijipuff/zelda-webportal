import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApplicantService } from '../../../../services/applicants.service';
import { Applicant } from '../../../../models/Applicant';
import { ApplicationSubmitted } from '../../../../models/ApplicationSubmitted';
import { Observable } from '../../../../../../node_modules/rxjs';
import { ApplicationFormA } from '../../../../models/ApplicationFormA';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from '../../../../../../node_modules/rxjs/operators';


@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.css']
})
export class ApplicantDetailsComponent implements OnInit {
  applicantId: string;
  applicant: Applicant;


  AppSubmitted: Observable<ApplicationSubmitted>;
  AppSubmitted$: Observable<ApplicationSubmitted[]>;

  AppFormA: Observable<ApplicationFormA>;
  AppFormA$: Observable<ApplicationFormA[]>;


  constructor(
    private applicantService: ApplicantService,
    private router: Router,
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.applicantId = this.route.snapshot.params['id'];
    console.log(this.applicantId);
    this.applicantService.getApplicant(this.applicantId).subscribe(data => {
      if (data != null) {
        console.log(data);
        this.applicant = data;
      } else {
        console.log('error loading applicant');
      }
    });


  }


  onDeleteClick(event) {

  }



}
