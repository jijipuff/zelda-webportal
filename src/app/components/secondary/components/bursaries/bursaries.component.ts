import { Component, OnInit } from '@angular/core';
import { BursaryService } from '../../../../services/bursary.service';
import { Bursary } from '../../../../models/Bursary';
import { BURSARIES } from '../../../../mock-bursaries';


@Component({
  selector: 'app-bursaries',
  templateUrl: './bursaries.component.html',
  styleUrls: ['./bursaries.component.css']
})
export class BursariesComponent implements OnInit {
  bursaries: Bursary[]= [];

  bursaryinfo: boolean;

  selectedBursary: Bursary;

  constructor(private bursaryService: BursaryService) { }

  ngOnInit() {
    this.bursaryService.getBursaries().subscribe(data => {
      this.bursaries = data;
    });
    this.bursaryinfo= false;
  }

  showInfo(bursary: Bursary)  {

    this.bursaryinfo= true;
    this.selectedBursary= bursary;

  }
}
