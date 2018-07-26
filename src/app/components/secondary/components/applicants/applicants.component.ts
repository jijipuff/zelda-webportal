import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../../../services/applicant.service';
import { Applicant } from '../../../../models/Applicant';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {

  applicants: Applicant[];

  selectedApplicant: Applicant;

  studentInfo: boolean;
  

  constructor(private applicantService: ApplicantService) { }

  ngOnInit() {
    this.applicantService.getApplicants()
    .subscribe(data => { 
      this.applicants = data;

    });
    console.log("Applicants retrieved");
    this.studentInfo= false;
  }

  showInfo(applicant: Applicant) {
    //Show student info
    this.studentInfo= true;
    this.selectedApplicant= applicant;

    //Change color of student name row


  }
  


}
