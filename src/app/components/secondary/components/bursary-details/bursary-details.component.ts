import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
        this.bursary = data;
        const foo = <any>data.closingDate;
        this.bursary.closingDate = foo.toDate();
      } else {
        console.log('error loading bursary');
      }
    });
  }

  updateClosingDate() {
    this.bursary.bursaryId = this.bursaryId;
    this.bursaryService.updateBursary(this.bursary)
    .then(res => {
      console.log(res);
      console.log('successfully updated');
    })
    .catch(err => {
      console.log(err.message);
      console.log('not updated');
    });
  }

  onDeleteClick() {
    if (confirm('are you sure?')) {
      this.bursary.bursaryId = this.bursaryId;
      this.bursaryService.deleleBursary(this.bursary)
        .then(res => {
          console.log(res);
          console.log('successfully deleted');
          this.router.navigate(['/bursaries']);
        })
        .catch(err => {
          console.log(err.message);
          console.log('not deleted');
        });
    }
  }

}
