import { Component, OnInit } from '@angular/core';
import { Bursary } from '../../../../models/Bursary';
import { Router, ActivatedRoute } from '@angular/router';
import { BursaryService } from '../../../../services/bursary.service';

@Component({
  selector: 'app-edit-bursary',
  templateUrl: './edit-bursary.component.html',
  styleUrls: ['./edit-bursary.component.css']
})
export class EditBursaryComponent implements OnInit {

  bursaryId: string;
  bursary: Bursary;

  readOnly: boolean;

  applicableFieldsOptions= [];
  dropdownSettings= {};

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
        console.log('Error loading bursary');
      }
    });

    this.applicableFieldsOptions = [
      { 'id': 1, 'itemName': 'Systems Engineering' },
      { 'id': 2, 'itemName': 'Software Engineering' },
      { 'id': 3, 'itemName': 'Data Science' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'custom-class-example'
    };

    this.readOnly= false;
  }

  editProfile(): void {


  }



}
