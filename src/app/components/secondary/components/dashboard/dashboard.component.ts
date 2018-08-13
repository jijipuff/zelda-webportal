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
  bursaries: Bursary[]= [];

  bursaryinfo: boolean;

  selectedBursary: Bursary;

  firstName: string;
  clientId: string;

  constructor(private bursaryService: BursaryService, private authService: AuthService) { }

  ngOnInit() {
    this.bursaryService.getBursaries().subscribe(Data => {
      this.bursaries = Data;
    });
    this.bursaryinfo= false;


    this.authService.clientAdmin.subscribe( data=> {
      if (data) {
        this.clientId= data.clientId;
        this.firstName= data.firstName;
      }
      else {
        console.log('Error: information not found');
      }
    })

  }

  showInfo(bursary: Bursary) {
    this.bursaryinfo= true;
    this.selectedBursary= bursary;
  }

}
