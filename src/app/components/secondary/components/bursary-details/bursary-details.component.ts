import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BursaryService } from '../../../../services/bursary.service';
import { Bursary } from '../../../../models/Bursary';

@Component({
  selector: 'app-bursary-details',
  templateUrl: './bursary-details.component.html',
  styleUrls: ['./bursary-details.component.css']
})
export class BursaryDetailsComponent implements OnInit {
  bursaryId: string;
  bursary: Bursary;

  constructor(
    private bursaryService: BursaryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.bursaryId =  this.route.snapshot.params['id'];
    this.bursaryService.getBursary(this.bursaryId).subscribe(data => {
      if (data != null) {
        console.log(data);
        this.bursary = data;
      } else {
        console.log('error loading bursary');
      }
    });
  }

}
