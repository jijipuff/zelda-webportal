import { Component, OnInit } from '@angular/core';
import { BursaryService } from '../../../../services/bursary.service';
import { Bursary } from '../../../../models/Bursary';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  bursaries: Bursary[] = [];
  bursaryId: string;
  bursary: Bursary;

  bursaryinfo: boolean;

  selectedBursary: Bursary;

  firstName: string;
  clientId: string;

  constructor(private bursaryService: BursaryService, private authService: AuthService) { }

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
  onDeleteClick(event) {

  }

  showInfo(bursary:Bursary) {
    this.bursaryinfo = true;
    this.selectedBursary=bursary;
  }
}
