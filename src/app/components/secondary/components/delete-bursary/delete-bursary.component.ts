import { Component, OnInit } from '@angular/core';
import { BursaryService } from '../../../../services/bursary.service';
import { Bursary } from '../../../../models/Bursary';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-bursary',
  templateUrl: './delete-bursary.component.html',
  styleUrls: ['./delete-bursary.component.css']
})
export class DeleteBursaryComponent implements OnInit {

  bursaryId: string;
  bursary: Bursary;

  constructor(
    private bursaryService: BursaryService,
    private router: Router,
    private route: ActivatedRoute) { }

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

  deleteBursary() {
    this.bursaryService.deleteBursary(this.bursaryId);
    console.log("deleting bursary..");
  }
}

