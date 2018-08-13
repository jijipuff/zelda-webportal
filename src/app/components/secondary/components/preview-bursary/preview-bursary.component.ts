import { Component, OnInit } from '@angular/core';
import { Bursary } from '../../../../models/Bursary';
import { BursaryService } from '../../../../services/bursary.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview-bursary',
  templateUrl: './preview-bursary.component.html',
  styleUrls: ['./preview-bursary.component.css']
})
export class PreviewBursaryComponent implements OnInit {

  bursaryId: string;
  bursary: Bursary;

  constructor(private bursaryService: BursaryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.bursaryId =  this.route.snapshot.params['id'];
    this.bursaryService.getBursary(this.bursaryId).subscribe(data => {
      if (data != null) {
        console.log(data);
        this.bursary = data;
      } else {
        console.log('Error loading bursary');
      }
    });
  }

}
