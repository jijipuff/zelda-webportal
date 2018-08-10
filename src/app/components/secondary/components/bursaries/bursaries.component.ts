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

  filterby: string;

  constructor(private bursaryService: BursaryService) { }

  ngOnInit() {
    this.bursaryService.getBursaries().subscribe(data => {
      this.bursaries = data;
    });
    this.bursaryinfo= false;
    this.filterby= 'Filter By';
  }

  filter(event): void {
    console.log(event);
  }


}
