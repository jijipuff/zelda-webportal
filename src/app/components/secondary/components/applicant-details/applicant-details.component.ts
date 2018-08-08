import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApplicantService } from '../../../../services/applicants.service';
import { Applicant } from '../../../../models/Applicant';


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
    this.ApplicantService.getApplicant(this.applicantId).subscribe(data => {
      if (data != null) {
        console.log(data);
        this.applicant = data;
        console.log(this.applicantId);
      } else {
        console.log('error loading bursary');
      }
    });
  }

  onDeleteClick(event) {
  
  }



}
