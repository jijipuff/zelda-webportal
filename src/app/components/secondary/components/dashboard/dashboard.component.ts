import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { BursaryService } from '../../../../services/bursary.service';
import { Bursary } from '../../../../models/Bursary';
import { AuthService } from '../../../../services/auth.service';
import { Applicant } from '../../../../models/Applicant';
import { FlaggedComponent } from '../flagged/flagged.component';
import { FlaggedService } from '../../../../services/flagged.service';
import { ApplicantsComponent } from '../applicants/applicants.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})

export class DashboardComponent implements OnInit {

  bursaries: Bursary[] = [];
  bursaryId: string;
  bursary: Bursary;

  bursaryinfo: boolean;

  selectedBursary: Bursary;

  firstName: string;
  clientId: string;

  flaggedService: FlaggedService = new FlaggedService();

 
  
  public flaggedApplicants: Array<string> = ['hello'];

  @ViewChild(FlaggedComponent) flaggedComponent;
  

  constructor(private bursaryService: BursaryService, private authService: AuthService,
    private_cfr: ComponentFactoryResolver) { }
    
  ngOnInit() {
    this.bursaryService.getBursary(this.bursaryId).subscribe(Data => {
      if (Data !=null) {
        console.log(Data);
        this.bursary = Data;
        console.log(this.bursaryId);
      } else {
        console.log('error loading bursary');
      }


    })

    this.bursaryService.getBursaries().subscribe(Data => {
      this.bursaries = Data;
    });
    this.bursaryinfo = false;

    this.authService.clientAdmin.subscribe(data => {
      if (data) {
        this.clientId = data.clientId;
        this.firstName = data.firstName;
      } else {
        console.log('error loading client');
      }
    })
  }


  

  removeObject() {
  }
  save() {

    let applicant: Applicant = new Applicant();
    // for hardcoded purposes
    applicant.firstName = "Jamie";
    applicant.lastName = "Oliver";
    applicant.applicantId = "1";

    this.flaggedService.push(applicant);


    alert('Saved Successfully!');
  }
  onDeleteClick(event) {

  }

  showInfo(bursary:Bursary) {
    this.bursaryinfo = true;
    this.selectedBursary=bursary;
  }
}
