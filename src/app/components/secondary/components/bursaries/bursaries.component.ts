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

  constructor(private bursaryService: BursaryService) { }

  ngOnInit() {
    this.bursaryService.getBursaries().subscribe(data => {
      this.bursaries = data;
    });
  }

}
