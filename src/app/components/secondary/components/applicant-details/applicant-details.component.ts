import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApplicantService } from '../../../../services/applicants.service';
import { Applicant } from '../../../../models/Applicant';
import { ApplicationSubmitted } from '../../../../models/ApplicationSubmitted';
import { Observable } from '../../../../../../node_modules/rxjs';


@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.css']
})
export class ApplicantDetailsComponent implements OnInit {
  applicantId: string;
  applicant: Applicant;

  
  constructor(
    private ApplicantService: ApplicantService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.applicantId =  this.route.snapshot.params['id'];
    console.log(this.applicantId);
    this.ApplicantService.getApplicant(this.applicantId).subscribe(data => {
      if (data != null) {
        console.log(data);
        this.applicant = data;
        // this.applicant.userId = f5y...
        /**
         * need the ApplicationForm where its userId= this.applicant.userId
         * then need ApplicationFormA where doc.id = ApplicationForm.doc.id
         */
      } else {
        console.log('error loading applicant');
      }
    });
  }

  onDeleteClick(event) {
  
  }



}
