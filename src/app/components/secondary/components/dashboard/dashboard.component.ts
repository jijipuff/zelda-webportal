import { Component, OnInit } from '@angular/core';
import { BursaryService } from '../../../../services/bursary.service';
import { Bursary } from '../../../../models/Bursary';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bursaries: Bursary[]= [];

  bursaryinfo: boolean;

  selectedBursary: Bursary;

  constructor(private bursaryService: BursaryService) { }

  ngOnInit() {
    this.bursaryService.getBursaries().subscribe(Data => {
      this.bursaries = Data;
    });
    this.bursaryinfo= false;
  }

  showInfo(bursary: Bursary) {
    this.bursaryinfo= true;
    this.selectedBursary= bursary;
  }

}
