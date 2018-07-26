import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../../../services/applicants.service';
import { Applicant } from '../../../../models/Applicant';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {
  applicants: Applicant[];

  constructor(private applicantService: ApplicantService) { }

  ngOnInit() {
    this.applicantService.getApplicants().subscribe(data => {
      this.applicants = data;
    });
  }

}

