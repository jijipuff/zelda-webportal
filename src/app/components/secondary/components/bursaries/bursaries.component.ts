import { Component, OnInit } from '@angular/core';
import { BursaryService } from '../../../../services/bursary.service';
import { Bursary } from '../../../../models/Bursary';

@Component({
  selector: 'app-bursaries',
  templateUrl: './bursaries.component.html',
  styleUrls: ['./bursaries.component.css']
})
export class BursariesComponent implements OnInit {
  bursaries: Bursary[]= [];

  bursaryinfo: boolean;

  selectedBursary: Bursary;

  filter: boolean;
  filterby: string;

  constructor(private bursaryService: BursaryService) { }

  ngOnInit() {
    this.bursaryService.getBursaries().subscribe(data => {
      this.bursaries = data;
    });
    this.bursaryinfo= false;
    this.filter= true;
    this.filterby= 'Filter By';
  }


  showInfo(bursary: Bursary)  {

    this.bursaryinfo= true;
    this.selectedBursary= bursary;

  }

  filterBy(): void {

    //this.filterby= filter;
1
    console.log(this.filterby);
  }


}
